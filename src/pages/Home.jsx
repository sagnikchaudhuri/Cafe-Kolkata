import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';
import Footer from '../components/Footer.jsx';
import Gallery from '../components/Gallery.jsx';
import Hero from '../components/Hero.jsx';
import Menu from '../components/Menu.jsx';
import QRSection from '../components/QRSection.jsx';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-coffee-50">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <QRSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
