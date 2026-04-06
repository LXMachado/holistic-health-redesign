import { Link } from 'react-router';
import { LotusLogo } from './LotusLogo';

export function TermsOfService() {
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

        <h1 className="text-3xl font-semibold text-[#2c2c2c] mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg text-[#4a5f56] max-w-none space-y-6">
          <p className="text-sm">Last updated: April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Beyond Body Holistic Health website and services, you accept 
              and agree to be bound by the terms and provisions of this agreement. If you do not agree 
              to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">2. Our Services</h2>
            <p>
              Beyond Body Holistic Health provides holistic health and massage therapy services including 
              but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remedial Massage</li>
              <li>Hot Stone Massage</li>
              <li>Pregnancy Massage</li>
              <li>Nutrition & Exercise Consultation</li>
            </ul>
            <p className="mt-3">
              All services are provided by qualified practitioners in accordance with relevant Australian 
              health regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">3. Bookings and Appointments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointments can be booked online, by phone, or in person</li>
              <li>A confirmation will be sent upon booking</li>
              <li>Please arrive 10 minutes before your scheduled appointment</li>
              <li>Cancellations require at least 24 hours notice</li>
              <li>Late cancellations or missed appointments may incur a fee</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">4. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is required at the time of service</li>
              <li>We accept cash, card, and bank transfer</li>
              <li>Our current fee schedule is available upon request</li>
              <li>Packages and gift vouchers are non-refundable unless otherwise stated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">5. Health Information</h2>
            <p>
              You agree to provide accurate and complete health information prior to treatment. It is 
              your responsibility to inform us of any medical conditions, allergies, medications, or 
              changes in your health status. If you have specific health concerns, please consult your 
              healthcare provider before receiving treatment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">6. Limitation of Liability</h2>
            <p>
              To the extent permitted by Australian Consumer Law (ACL), we provide services with due 
              care and skill. Beyond Body Holistic Health accepts liability only for breach of 
              guarantees that cannot be excluded under the ACL. We are not liable for any indirect 
              or consequential losses arising from our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">7. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and designs, is the property 
              of Beyond Body Holistic Health and is protected by Australian copyright laws. You may 
              not reproduce, distribute, or modify any content without our written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">8. User Conduct</h2>
            <p>When using our website or services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post or transmit any unlawful, defamatory, or obscene material</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for any illegal purpose</li>
              <li>Interfere with the proper operation of our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services at our sole discretion 
              if you breach these terms or engage in conduct that we consider inappropriate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of Western Australia, Australia. Any disputes 
              arising from these terms or our services will be subject to the exclusive jurisdiction 
              of the courts of Western Australia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">11. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Any changes will be posted on this page. 
              Your continued use of our services after changes are posted constitutes acceptance of 
              the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">12. Contact Information</h2>
            <p>For questions about these terms, please contact us:</p>
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
