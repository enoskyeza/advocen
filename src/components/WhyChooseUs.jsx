import { Target, Users, BookOpen, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: 'Evidence-Based Research',
      description: 'Our policy recommendations are grounded in rigorous research and data analysis, ensuring impactful and sustainable solutions.'
    },
    {
      icon: Users,
      title: 'Community-Centered Approach',
      description: 'We prioritize the voices and needs of local communities, ensuring our work reflects real experiences and challenges.'
    },
    {
      icon: BookOpen,
      title: 'Expert Knowledge',
      description: 'Our team comprises seasoned researchers and policy experts with deep understanding of Uganda\'s socio-economic landscape.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'With over 35 completed studies and 15+ partnerships, we have demonstrated consistent impact across multiple sectors.'
    }
  ];

  return (
    <section className="py-20 bg-orange-50/80 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Side by side layout, Mobile: Stacked */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Subtitle - 1/4 on desktop, full width on mobile */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <p className="section-subtitle">
              Why Choose Us
            </p>
          </div>

          {/* Content - 3/4 on desktop, full width on mobile */}
          <div className="lg:col-span-3">
            {/* Title */}
            <h2 className="section-title mb-8">
              Leading the Way in Policy Research and Advocacy
            </h2>

            {/* Grid content - 2x2 on desktop, single column on mobile */}
            <div className="space-y-0">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-gray-300 md:border-b-0">
                {reasons.slice(0, 2).map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div key={index} className="py-8 border-b border-gray-300 md:border-b-0">
                      <div className="md:flex md:items-stretch">
                        <div className={`${index === 0 ? 'md:pr-8' : 'md:pl-8'} flex-1`}>
                          {/* Icon */}
                          <div className="mb-4">
                            <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                          </div>

                          {/* Title */}
                          <h4 className="text-xl font-semibold text-primary mb-3">
                            {reason.title}
                          </h4>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed font-light">
                            {reason.description}
                          </p>
                        </div>
                        {index === 0 && (
                          <div className="hidden md:block w-px bg-gray-300"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {reasons.slice(2, 4).map((reason, index) => {
                  const Icon = reason.icon;
                  const isLast = index === 1;
                  return (
                    <div key={index} className={`py-8 ${!isLast ? 'border-b border-gray-300 md:border-b-0' : ''}`}>
                      <div className="md:flex md:items-stretch">
                        <div className={`${index === 0 ? 'md:pr-8' : 'md:pl-8'} flex-1`}>
                          {/* Icon */}
                          <div className="mb-4">
                            <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                          </div>

                          {/* Title */}
                          <h4 className="text-xl font-semibold text-primary mb-3">
                            {reason.title}
                          </h4>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed font-light">
                            {reason.description}
                          </p>
                        </div>
                        {index === 0 && (
                          <div className="hidden md:block w-px bg-gray-300"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
