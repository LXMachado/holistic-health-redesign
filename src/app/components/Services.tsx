import { ImageWithFallback } from './figma/ImageWithFallback';

const featuredService = {
  title: 'Remedial Massage',
  eyebrow: 'Featured treatment',
  description:
    'Targeted care for back and neck pain, frozen shoulder, plantar fascia, carpal tunnel, and other musculoskeletal concerns. Each session is adapted to what your body needs that day.',
  detail:
    'Private health rebates are available for remedial massage, making it the strongest entry point for clients wanting both relief and structured care.',
  duration: '35 or 75 minutes',
  price: '$50 or $100',
  image:
    'https://images.unsplash.com/photo-1519824145371-296894a0daa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
};

const supportingServices = [
  {
    title: 'Swedish Massage',
    description:
      'A gentler relaxation treatment that supports circulation, better sleep, and nervous system calm. Suitable for clients wanting a softer reset.',
    price: '35 min $50 • 75 min $100',
    tone: 'bg-[#f4f0ff]',
    accent: 'text-[#6d3ed1]',
  },
  {
    title: 'Sports Massage',
    description:
      'Dry massage with passive and active stretching to improve flexibility, movement quality, and performance.',
    price: '35 min $50 • 75 min $100',
    tone: 'bg-[#f0ecff]',
    accent: 'text-[#5b2bc5]',
  },
  {
    title: 'Pregnancy Massage',
    description:
      'Relaxation-focused care from the second trimester onward to ease swelling, improve circulation, and support comfort through pregnancy.',
    price: '35 min $50 • 75 min $100',
    tone: 'bg-[#faf0ff]',
    accent: 'text-[#8b39b7]',
  },
  {
    title: 'Cupping Therapy',
    description:
      'Used to support pain relief, muscle recovery, circulation, and inflammation reduction. Often paired with other hands-on treatments.',
    price: '35 min $50 • 75 min $100',
    tone: 'bg-[#eef4ff]',
    accent: 'text-[#42306e]',
  },
  {
    title: 'Sculpting Massage',
    description:
      'Focused on lymphatic flow, contouring, and reducing fluid retention. Recommended as a series for best results.',
    price: '35 min $50 • 10-session recommendation',
    tone: 'bg-[#f9effa]',
    accent: 'text-[#9b3ca7]',
  },
  {
    title: 'Hot Stone Massage',
    description:
      'Basalt stone heat helps melt tension, ease pain, and create a deeper sense of physical and mental unwinding.',
    price: '75 min $120',
    tone: 'bg-[#eff4ff]',
    accent: 'text-[#4c3a9b]',
  },
  {
    title: 'Nutrition & Exercise Consultation',
    description:
      'A practical consult to improve general health, daily movement, and diet with recommendations that fit your lifestyle.',
    price: '60 min $50',
    tone: 'bg-[#f8f3ff]',
    accent: 'text-[#7433aa]',
  },
];

export function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#faf9ff_0%,#faf9f7_35%,#ffffff_100%)] py-20 lg:py-28">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#ddd5ff]/30 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-[#b9a7f5]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#5b2bc5]">Our Services</div>
            <h2 className="text-4xl leading-tight tracking-[-0.02em] text-[#2f3331] lg:text-5xl">
              Real treatment options, arranged with more rhythm and hierarchy.
            </h2>
          </div>

          <div className="space-y-4 text-[#5f5a68]">
            <p className="text-lg leading-8">
              <span className="font-logo">Beyond Body Holistic Health</span> offers hands-on treatment for pain, recovery, relaxation, pregnancy,
              circulation, and overall well-being. The core offer stays premium and editorial, but the tone is now
              warmer and less clinical.
            </p>
            <p className="text-sm uppercase tracking-[0.24em] text-[#6d3ed1]">
              Start with remedial massage or book guidance if you need help choosing.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:auto-rows-[minmax(220px,auto)]">
          <article className="group relative overflow-hidden rounded-[2.5rem] bg-[#ede7ff] lg:col-span-2 lg:row-span-2">
            <div className="grid h-full lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] lg:min-h-full">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(55,47,42,0.06),rgba(55,47,42,0.28))]" />
                <ImageWithFallback
                  src={featuredService.image}
                  alt={featuredService.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
                <div className="space-y-5">
                  <div className="text-sm uppercase tracking-[0.26em] text-[#6d3ed1]">
                    {featuredService.eyebrow}
                  </div>
                  <div>
                    <h3 className="text-4xl leading-tight text-[#2f3331]">{featuredService.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-[#565164]">{featuredService.description}</p>
                  </div>
                  <p className="max-w-xl text-base leading-7 text-[#665f72]">{featuredService.detail}</p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap gap-3 text-sm text-[#42306e]">
                    <span className="rounded-full bg-white/70 px-4 py-2">{featuredService.duration}</span>
                    <span className="rounded-full bg-[#5b2bc5] px-4 py-2 text-white">{featuredService.price}</span>
                  </div>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="rounded-full bg-[#24163f] px-7 py-4 text-white transition-all hover:bg-[#5b2bc5]"
                  >
                    Book Remedial Massage
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] bg-[#f5f1ff] p-8 text-[#2f3331] shadow-[0_18px_40px_rgba(91,43,197,0.08)]">
            <div className="text-sm uppercase tracking-[0.24em] text-[#6d3ed1]">Best for first-time clients</div>
            <h3 className="mt-4 text-3xl leading-tight">Not sure where to begin?</h3>
            <p className="mt-4 text-base leading-7 text-[#625c6c]">
              Juliana can help you choose between remedial massage, hot stone, or a consultation based on your body,
              pain points, and wellness goals.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 rounded-full border border-[#b9a7f5]/60 px-6 py-3 text-[#42306e] transition-colors hover:bg-white"
            >
              Ask for Guidance
            </button>
          </article>

          {supportingServices.map((service) => (
            <article
              key={service.title}
              className={`flex h-full flex-col justify-between rounded-[2rem] p-7 shadow-[0_18px_36px_rgba(69,59,51,0.05)] transition-transform duration-300 hover:-translate-y-1 ${service.tone}`}
            >
              <div className="space-y-4">
                <div className={`text-sm uppercase tracking-[0.22em] ${service.accent}`}>Treatment</div>
                <div>
                  <h3 className="text-2xl leading-tight text-[#2f2b38]">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#625c6c]">{service.description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="text-sm leading-6 text-[#42306e]">{service.price}</div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="rounded-full bg-white/80 px-5 py-3 text-sm text-[#42306e] transition-colors hover:bg-white"
                >
                  Book
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2.25rem] bg-[linear-gradient(135deg,#f5eeff_0%,#ecf6ff_100%)] px-8 py-7 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#7433aa]">Good to know</p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-[#565164]">
              Appointments can be arranged by SMS, email, or the contact form. If you are booking remedial massage,
              ask about available private health rebates.
            </p>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-[linear-gradient(135deg,#7b43dc_0%,#5b2bc5_100%)] px-8 py-4 text-white shadow-[0_18px_35px_rgba(91,43,197,0.2)] transition-all hover:-translate-y-0.5"
          >
            Schedule Your Session
          </button>
        </div>
      </div>
    </section>
  );
}
