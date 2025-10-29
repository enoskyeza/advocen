import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Solid Primary Background */}
      <div className="absolute inset-0 bg-primary"></div>
      
      {/* Background Map Image (with smooth pulse) */}
      <div className="absolute inset-0">
        {/* Mobile: pulse 0.2 -> 0.3 */}
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            backgroundImage: 'url("/map.png")',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            animation: 'heroPulseMobile 3s ease-in-out infinite',
            willChange: 'opacity'
          }}
        ></div>
        {/* Desktop and up: pulse 0.4 -> 0.5 */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: 'url("/map.png")',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            animation: 'heroPulseDesktop 3s ease-in-out infinite',
            willChange: 'opacity'
          }}
        ></div>
      </div>
      <style>{`
        @keyframes heroPulseMobile {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        @keyframes heroPulseDesktop {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.65; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforming Evidence into Action
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100">
          We’re a team of researchers, advocates, and thinkers using data to drive fair, healthy, and sustainable development across Uganda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#research"
            className="group relative overflow-hidden bg-gold text-primary px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
          >
            <span className="absolute inset-0 bg-green-600 transform origin-left scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
            <span className="relative z-10 inline-flex items-center">
              Explore Our Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </a>
          <a
            href="#contact"
            className="group relative overflow-hidden bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
          >
            <span className="absolute inset-0 bg-green-600 transform origin-left scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Partner With Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
