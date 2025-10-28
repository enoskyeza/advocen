import { ArrowRight } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Text Content */}
        <div className="flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16 lg:py-20 order-2 lg:order-1">
          <div className="max-w-xl">
            {/* Subtitle */}
            <p className="section-subtitle mb-6">
              Get Involved
            </p>

            {/* Headline */}
            <h2 className="section-title mb-6">
              Be Part of the Change.
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Whether you&apos;re a policymaker, researcher, or advocate, your contribution matters. 
              Join us to turn evidence into lasting impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-semibold hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>

        {/* Right Side - Background Image */}
        <div className="relative min-h-[400px] lg:min-h-full order-1 lg:order-2">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/7688159/pexels-photo-7688159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
          >
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden"></div>
          </div>
          
          {/* Fallback gradient if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-teal/10 to-gold/10 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
