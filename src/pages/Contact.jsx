import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
