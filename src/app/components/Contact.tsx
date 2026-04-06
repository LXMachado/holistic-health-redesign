import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://www.beyondbodyholistichealth.com.au/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      
      if (response.ok) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#faf9f7] via-[#e8f4f0] to-white relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#5a7d6e] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a8bfb3] rounded-full opacity-5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-wider text-[#5a7d6e] mb-3">Get In Touch</div>
          <h2 className="text-4xl lg:text-5xl mb-4">Start Your Wellness Journey</h2>
          <p className="text-lg text-[#6b7c73]">
            Ready to experience holistic wellness? Reach out and let's begin your personalized journey to feeling better.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-[#5a7d6e]">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#faf9f7] border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#5a7d6e] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-[#5a7d6e]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#faf9f7] border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#5a7d6e] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm text-[#5a7d6e]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#faf9f7] border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#5a7d6e] transition-colors"
                    placeholder="04XX XXX XXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm text-[#5a7d6e]">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-[#faf9f7] border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#5a7d6e] transition-colors resize-none"
                  placeholder="Tell us about what you're hoping to address or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-[#5a7d6e] text-white rounded-full transition-all hover:bg-[#4a6d5e] hover:shadow-lg hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg space-y-6">
              <h3 className="text-2xl text-[#2c2c2c]">Quick Contact</h3>

              <div className="space-y-4">
                <a
                  href="tel:+61406757655"
                  className="flex items-center gap-4 text-[#4a5f56] hover:text-[#5a7d6e] transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#e8f4f0] rounded-xl flex items-center justify-center group-hover:bg-[#5a7d6e] transition-colors">
                    <svg className="w-5 h-5 text-[#5a7d6e] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#6b7c73]">Call</div>
                    <div>0406 757 655</div>
                  </div>
                </a>

                <a
                  href="sms:+61406757655"
                  className="flex items-center gap-4 text-[#4a5f56] hover:text-[#5a7d6e] transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#e8f4f0] rounded-xl flex items-center justify-center group-hover:bg-[#5a7d6e] transition-colors">
                    <svg className="w-5 h-5 text-[#5a7d6e] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#6b7c73]">Text</div>
                    <div>0406 757 655</div>
                  </div>
                </a>

                <a
                  href="mailto:info@beyondbodyholistichealth.com.au"
                  className="flex items-center gap-4 text-[#4a5f56] hover:text-[#5a7d6e] transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#e8f4f0] rounded-xl flex items-center justify-center group-hover:bg-[#5a7d6e] transition-colors">
                    <svg className="w-5 h-5 text-[#5a7d6e] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#6b7c73]">Email</div>
                    <div className="break-all text-sm">info@beyondbodyholistichealth.com.au</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-[#5a7d6e] to-[#4a6d5e] text-white rounded-[2rem] p-8 shadow-lg">
              <h3 className="text-2xl mb-4">Visit Us</h3>
              <p className="leading-relaxed mb-6">
                Waikiki, Western Australia<br />
                Australia
              </p>
              <div className="space-y-2 text-sm opacity-90">
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
