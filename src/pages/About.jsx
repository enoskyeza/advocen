import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
