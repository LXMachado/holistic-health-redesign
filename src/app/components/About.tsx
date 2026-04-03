import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a8bfb3] to-[#d4e8df] opacity-30" />
              <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                <ImageWithFallback
                  src="/images/about/juliana-machado.png"
                  alt="Juliana Machado"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <div className="text-sm uppercase tracking-wider text-[#5a7d6e]">Meet Your Therapist</div>
              <h2 className="text-4xl lg:text-5xl">Juliana Machado</h2>
              <p className="text-lg text-[#6b7c73]">Remedial Massage Therapist Since 2009</p>
            </div>

            <div className="space-y-4 text-[#4a5f56] leading-relaxed">
              <p>
                Remedial Massage Therapist since 2009 with a passion for helping people feel their best and promoting healthy
                living.
              </p>
              <p>
                Currently pursuing a Bachelor of Health Science, I have a deep understanding of diet, exercise,
                and lifestyle changes that enhance well-being.
              </p>
              <p>
                I am skilled in various massage techniques and exclusively use natural products to ensure optimal
                care. At Beyond Body Holistic Health, every treatment is shaped around the whole person, not just a
                single symptom.
              </p>
            </div>

            {/* Quote */}
            <div className="relative mt-8 pl-6 border-l-4 border-[#5a7d6e] py-2">
              <p className="text-xl italic text-[#5a7d6e]">
                "Helping people feel better in their bodies through treatment, healthy living, and practical care."
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-[#e8f4f0] text-[#5a7d6e] rounded-full text-sm">
                Certified Remedial Massage Therapist
              </span>
              <span className="px-4 py-2 bg-[#e8f4f0] text-[#5a7d6e] rounded-full text-sm">
                Bachelor of Health Science Candidate
              </span>
              <span className="px-4 py-2 bg-[#e8f4f0] text-[#5a7d6e] rounded-full text-sm">
                Natural Products Focus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
