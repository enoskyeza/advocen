import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader
          image="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg"
          title="About Advocen Initiatives"
          subtitle="Advancing evidence-based policy for a just, healthy and prosperous Uganda"
        />
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
