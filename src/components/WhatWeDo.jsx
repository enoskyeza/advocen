import { Heart, TrendingUp, GraduationCap, Scale, Lightbulb, Leaf, ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
  const focusAreas = [
    {
      icon: Heart,
      title: 'Health Law & Policy',
      description: 'Ensuring equitable healthcare through better governance and legal frameworks.'
    },
    {
      icon: TrendingUp,
      title: 'Economic Development',
      description: 'Driving inclusive growth through research-backed policy reform.'
    },
    {
      icon: GraduationCap,
      title: 'Education & Skills',
      description: 'Building an innovative, equitable learning ecosystem for all.'
    },
    {
      icon: Scale,
      title: 'Human Rights & Governance',
      description: 'Advocating for justice, transparency, and citizen participation.'
    },
    {
      icon: Lightbulb,
      title: 'Private Sector Development',
      description: 'Empowering entrepreneurship and sustainable business.'
    },
    {
      icon: Leaf,
      title: 'Energy & Environment',
      description: 'Championing clean energy and responsible resource use.'
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">
            What We Do
          </p>
          <h2 className="section-title max-w-3xl mx-auto">
            Our research and advocacy span key sectors, driving evidence-based policy reform across Uganda
          </h2>
        </div>

        {/* Focus Area Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group bg-primary p-6 shadow-md transition-all duration-300 transform hover:-translate-y-3 cursor-pointer flex flex-col min-h-[320px]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <Icon className="h-12 w-12 text-white stroke-[1.5]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-beige mb-3 text-center">
                    {area.title}
                  </h3>
                  <p className="text-beige/90 text-sm leading-relaxed text-center">
                    {area.description}
                  </p>
                </div>

                {/* Read More Link - Always at bottom */}
                <div className="text-center mt-6">
                  <a
                    href="#research"
                    className="inline-flex items-center text-white font-semibold hover:text-gold transition-all duration-300 text-sm group-hover:gap-3 gap-2"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
