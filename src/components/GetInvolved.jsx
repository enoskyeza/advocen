export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Right Side - Background Image */}
        <div className="relative min-h-[400px] lg:min-h-full order-1 lg:order-2">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/teamwork.jpg')`,
            }}
          >
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden"></div>
          </div>
          
          {/* Fallback gradient if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-teal/10 to-gold/10 -z-10"></div>
        </div>
        
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
            <a
              href="/contact"
              className="group relative overflow-hidden bg-primary text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-gold transform origin-left scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Partner With Us</span>
            </a>
            <a
              href="/contact"
              className="group relative overflow-hidden bg-gold text-primary px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-white">Get Involved</span>
            </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
