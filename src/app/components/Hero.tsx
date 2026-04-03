import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#f8f3ee]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,176,146,0.24),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(120,149,131,0.18),_transparent_34%),linear-gradient(135deg,_#f8f3ee_0%,_#f4efe9_42%,_#f7f4ef_100%)]" />
      <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#d5bca3]/35 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-4%] h-96 w-96 rounded-full bg-[#9caf9d]/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:px-12 lg:py-24">
        <div className="space-y-8">
         

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-[#7b6553]">
              Beyond Body Holistic Health
            </p>
            <h1 className="max-w-3xl text-5xl leading-[0.94] tracking-[-0.03em] text-[#2f3331] sm:text-6xl lg:text-7xl">
              Reclaim Your Body&apos;s
              <span className="block text-[#6f7e70] italic"> Natural Balance</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#5f645f] sm:text-xl">
              Personalized massage therapy, movement guidance, and nutrition support in Waikiki, WA.
              Thoughtful treatment for pain, tension, recovery, and long-term well-being.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-[linear-gradient(135deg,#7c8f7e_0%,#5d7264_100%)] px-8 py-4 text-white shadow-[0_20px_40px_rgba(93,114,100,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(93,114,100,0.28)]"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="rounded-full border border-[#bca48d]/45 bg-white/65 px-8 py-4 text-[#5d5a57] backdrop-blur-sm transition-all hover:border-[#8c745f]/55 hover:bg-white"
            >
              Explore Treatments
            </button>
          </div>

          <div className="grid gap-4 border-t border-[#bfae9b]/25 pt-7 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white/55 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.24em] text-[#8d7662]">Based in</div>
              <div className="mt-2 text-lg text-[#38413d]">Waikiki, Western Australia</div>
            </div>
            <div className="rounded-[1.5rem] bg-white/55 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.24em] text-[#8d7662]">Booking</div>
              <div className="mt-2 text-lg text-[#38413d]">SMS, email, or contact form</div>
            </div>
            <div className="rounded-[1.5rem] bg-white/55 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.24em] text-[#8d7662]">Signature care</div>
              <div className="mt-2 text-lg text-[#38413d]">Tailored remedial treatments</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-[linear-gradient(145deg,rgba(218,194,168,0.44),rgba(127,163,147,0.16))] blur-2xl" />
          <div className="absolute inset-0 rotate-[3deg] rounded-[3rem] bg-[#d8c0a7]/45" />

          <div className="relative overflow-hidden rounded-[3rem] shadow-[0_35px_70px_rgba(66,56,47,0.18)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,48,46,0.06),rgba(64,63,55,0.28))]" />
            <ImageWithFallback
              src="/images/hero/hero.png"
              alt="Calm massage treatment room and therapy session"
              className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[640px]"
            />

           
          </div>
        </div>
      </div>
    </section>
  );
}
