export function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Personalized Care',
      description: 'Every session is designed specifically for your body, goals, and wellness journey.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Holistic Approach',
      description: 'I address the whole person — body, nutrition, and movement — to create lasting wellness, not just temporary relief.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Natural Products',
      description: 'I use only organic, sustainably sourced oils and products that are gentle on your skin and the environment.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '15+ Years Experience',
      description: 'Extensive training and over a decade of hands-on experience treating a wide range of conditions and wellness goals.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#e8f4f0] via-white to-[#f5f5f3] relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a8bfb3] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5a7d6e] rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-wider text-[#5a7d6e] mb-3">Why Choose Us</div>
          <h2 className="text-4xl lg:text-5xl mb-4">Wellness That Feels Different</h2>
          <p className="text-lg text-[#6b7c73]">
             Here's what makes Beyond Body Holistic Health truly unique.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card with organic shape */}
              <div className="relative bg-white rounded-[2rem] p-8 h-full shadow-md hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex p-4 bg-gradient-to-br from-[#e8f4f0] to-[#d4e8df] text-[#5a7d6e] rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-[#6b7c73] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#a8bfb3] to-[#5a7d6e] rounded-[2rem] -z-10 opacity-0 group-hover:opacity-5 blur transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
