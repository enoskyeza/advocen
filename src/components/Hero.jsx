import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Solid Primary Background */}
      <div className="absolute inset-0 bg-primary"></div>
      
      {/* Subtle Background Pattern Texture */}
      <div className="absolute inset-0 opacity-[4%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Evidence-Based Policy for a Healthy, Prosperous Uganda
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100">
          We empower institutions, communities and businesses to make informed decisions through research, advocacy and inclusive development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#research"
            className="bg-gold text-primary px-8 py-4 text-lg font-semibold hover:bg-gold-600 transition-all transform hover:scale-105 inline-flex items-center justify-center"
          >
            Explore Our Research
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105 inline-flex items-center justify-center"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
