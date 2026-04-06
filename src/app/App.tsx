import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />

      <main>
        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <WhyChooseUs />

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<><Header /><PrivacyPolicy /><Footer /></>} />
        <Route path="/terms" element={<><Header /><TermsOfService /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}