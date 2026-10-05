<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'message' => 'Please provide a name, valid email address, and message.']);
}

if (strlen($name) > 120 || strlen($email) > 254 || strlen($phone) > 50 || strlen($message) > 5000) {
    respond(422, ['ok' => false, 'message' => 'One or more fields are too long.']);
}

// Send from a mailbox on this domain: shared hosts commonly reject external From addresses.
$to = 'juaussiemachado@gmail.com';
$from = 'info@beyondbodyholistichealth.com.au';
$subject = 'New website contact form submission';
$body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\n\nMessage:\n{$message}\n";
$headers = [
    "From: Beyond Body Holistic Health <{$from}>",
    "Reply-To: {$email}",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail($to, $subject, $body, implode("\r\n", $headers))) {
    respond(500, ['ok' => false, 'message' => 'Unable to send message.']);
}

respond(200, ['ok' => true, 'message' => 'Message sent successfully.']);
