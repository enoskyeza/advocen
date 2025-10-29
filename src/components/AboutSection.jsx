import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Subtitle and Title */}
          <div>
            <p className="section-subtitle mb-3">Who We Are</p>
            <h2 className="section-title mb-4">
              Advancing Evidence Based Policy for Uganda
            </h2>
          </div>

          {/* Right Side - Copy */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-primary">Advocen Initiatives</strong> is a Uganda-based research and advocacy 
              organisation dedicated to advancing evidence-based policy, health law and inclusive development across key sectors.
            </p>
            <p>
              We empower institutions, communities and businesses to make informed decisions through rigorous research, 
              strategic advocacy and inclusive development programs that drive sustainable change.
            </p>
            <p>
              From health law to economic development, our work spans critical sectors, bringing evidence to policy-making 
              and creating lasting impact across Uganda and the East African region.
            </p>
            <a 
              href="#research" 
              className="inline-flex items-center text-primary font-semibold hover:text-teal transition-colors mt-4"
            >
              Learn more about our work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
