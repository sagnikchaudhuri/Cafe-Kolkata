import About from '../components/About.jsx';
import BusinessBenefits from '../components/BusinessBenefits.jsx';
import Contact from '../components/Contact.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';
import Footer from '../components/Footer.jsx';
import Gallery from '../components/Gallery.jsx';
import Hero from '../components/Hero.jsx';
import Menu from '../components/Menu.jsx';
import QRSection from '../components/QRSection.jsx';
import Testimonials from '../components/Testimonials.jsx';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-coffee-50">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <BusinessBenefits />
      <QRSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
