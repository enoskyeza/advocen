import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader
          image="/images/Kampala.jpg"
          title="Contact Us"
          subtitle="
            Get in touch with our team to discuss partnerships, research collaboration, or inquiries"
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
