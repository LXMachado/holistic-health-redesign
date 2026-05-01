import { Link } from 'react-router';
import { LotusLogo } from './LotusLogo';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <LotusLogo size={40} />
          <div>
            <div className="text-lg text-[#2c2c2c]">Beyond Body</div>
            <div className="text-xs text-[#6b7c73]">Holistic Health</div>
          </div>
        </div>

        <h1 className="text-3xl font-semibold text-[#2c2c2c] mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-[#4a5f56] max-w-none space-y-6">
          <p className="text-sm">Last updated: April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Introduction</h2>
            <p>
              Beyond Body Holistic Health is committed to protecting 
              your privacy in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles 
              (APPs). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal 
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">What Personal Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Health information (medical history, treatment notes, allergies)</li>
              <li>Payment information (processed securely through third parties)</li>
              <li>Appointment history and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">How We Collect Your Information</h2>
            <p>We collect personal information directly from you when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Book an appointment</li>
              <li>Fill out our intake forms</li>
              <li>Contact us via phone, email, or our website</li>
              <li>Provide feedback or testimonials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Purpose of Collection</h2>
            <p>We collect your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing holistic health and massage therapy services</li>
              <li>Managing appointments and customer relationships</li>
              <li>Complying with legal and regulatory obligations</li>
              <li>Communicating with you about our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Disclosure of Personal Information</h2>
            <p>
              We may disclose your personal information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our staff and contractors involved in providing services</li>
              <li>Third parties where you have consented</li>
              <li>Legal and regulatory authorities when required by law</li>
              <li>Payment processors (who handle data securely)</li>
            </ul>
            <p className="mt-3">
              We will not disclose your health information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, interference, 
              loss, and unauthorized access. We store your information securely and only retain it for 
              as long as necessary for the purposes outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Access and Correction</h2>
            <p>
              You have the right to access and correct your personal information. To request access or 
              correction, please contact us using the details below. We will respond to your request 
              within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Complaints</h2>
            <p>
              If you have a complaint about how we handle your personal information, please contact us. 
              We will investigate and respond within 30 days. You may also complain to the Office of 
              the Australian Information Commissioner (OAIC) at www.oaic.gov.au.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Contact Us</h2>
            <p>For privacy concerns, please contact us:</p>
            <ul className="list-none pl-0 space-y-2 mt-3">
              <li>Email: info@beyondbodyholistichealth.com.au</li>
              <li>Phone: 0406 757 655</li>
              <li>Address: Waikiki, Western Australia, Australia</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#5a7d6e]/20">
          <Link to="/" className="text-[#5a7d6e] hover:text-[#4a6d5e] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
