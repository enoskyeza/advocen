import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images for carousel with actual backgrounds from Pexels
  const slides = [
    {
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Evidence-Based Policy for a Healthy, Prosperous Uganda',
      subtitle: 'We empower institutions, communities and businesses to make informed decisions through research, advocacy and inclusive development.'
    },
    {
      image: 'https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Shaping Policy. Empowering Lives.',
      subtitle: 'Advocen Initiatives brings rigorous research and evidence to policy-making, driving sustainable change across Uganda.'
    },
    {
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Research That Transforms Communities',
      subtitle: 'From health law to economic development, our work creates lasting impact through evidence-based solutions.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Carousel Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img 
            src={slide.image} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability - solid at top, transparent at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary/80"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fadeIn">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#research"
            className="bg-gold text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            Explore Our Research
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-gold w-8' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
