import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Emma Richardson',
    role: 'Regular Client',
    image: 'https://images.unsplash.com/photo-1767605726741-2c149ab116f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
    content: 'After years of chronic back pain, I finally found relief with Juliana. Her holistic approach didn\'t just treat my symptoms — she helped me understand my body and make lasting changes. I can\'t recommend Beyond Body enough.',
    featured: true,
  },
  {
    name: 'Michael Chen',
    role: 'Client since 2023',
    image: 'https://images.unsplash.com/photo-1595392599406-88100147f91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
    content: 'The personalized nutrition consultation changed everything for me. Juliana took the time to understand my lifestyle and created a plan that actually works. Feeling better than I have in years.',
    featured: false,
  },
  {
    name: 'Jessica Moore',
    role: 'Client since 2021',
    image: 'https://images.unsplash.com/photo-1767610661622-20cdd3733b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
    content: 'The hot stone massage is pure bliss. Juliana creates such a calming, safe space. Every session leaves me feeling completely recharged and centered.',
    featured: false,
  },
];

export function Testimonials() {
  const featuredTestimonial = testimonials.find(t => t.featured);
  const otherTestimonials = testimonials.filter(t => !t.featured);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-wider text-[#5b2bc5] mb-3">Testimonials</div>
          <h2 className="text-4xl lg:text-5xl mb-4">What My Clients Say</h2>
          <p className="text-lg text-[#68607a]">
            Real stories from real people who've experienced the Beyond Body difference.
          </p>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <div className="mb-12">
            <div className="relative bg-gradient-to-br from-[#f0ecff] to-[#f8f6ff] rounded-[3rem] p-10 lg:p-14 shadow-xl">
              {/* Decorative quote mark */}
              <div className="absolute top-8 left-8 text-[#5b2bc5] opacity-20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#5b2bc5] rounded-full blur-xl opacity-20" />
                    <ImageWithFallback
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.name}
                      className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <p className="text-xl lg:text-2xl text-[#2c2c2c] leading-relaxed italic">
                    "{featuredTestimonial.content}"
                  </p>
                  <div>
                    <div className="text-[#5b2bc5]">{featuredTestimonial.name}</div>
                    <div className="text-sm text-[#68607a]">{featuredTestimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#f0ecff] rounded-[2rem] p-8 hover:border-[#b9a7f5] transition-colors"
            >
              {/* Quote mark */}
              <div className="text-[#5b2bc5] opacity-30 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-[#42306e] leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#f0ecff]"
                />
                <div>
                  <div className="text-[#5b2bc5]">{testimonial.name}</div>
                  <div className="text-sm text-[#68607a]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
