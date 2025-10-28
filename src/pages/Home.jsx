import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ImageStrip from '../components/ImageStrip';
import WhatWeDo from '../components/WhatWeDo';
import ImpactNumbers from '../components/ImpactNumbers';
import WhyChooseUs from '../components/WhyChooseUs';
import GetInvolved from '../components/GetInvolved';
import FeaturedResearch from '../components/FeaturedResearch';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ImageStrip />
        <WhatWeDo />
        <ImpactNumbers />
        <WhyChooseUs />
        <GetInvolved />
        <FeaturedResearch />
        {/* Additional sections can be added here later */}
      </main>
      <Footer />
    </div>
  );
}
