import { useState, useEffect, useRef } from 'react';
import { FileText, Users, Heart, FolderOpen } from 'lucide-react';

export default function ImpactNumbers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: FileText,
      number: 35,
      suffix: '+',
      label: 'Policy briefs and studies completed',
      color: 'text-gold'
    },
    {
      icon: Users,
      number: 15,
      suffix: '+',
      label: 'Government and civil society partnerships',
      color: 'text-teal'
    },
    {
      icon: FolderOpen,
      number: 7,
      suffix: '',
      label: 'Ongoing multi-sectoral research projects',
      color: 'text-gold'
    },
    {
      icon: Heart,
      number: 12000,
      suffix: '+',
      label: 'Citizens reached through community programs',
      color: 'text-teal'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const AnimatedCounter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrameId;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [isVisible, end, duration]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary via-primary-700 to-teal-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("/world.png")`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3 text-gold">
            Impact in Numbers
          </p>
          <h2 className="section-title text-white max-w-3xl mx-auto">
            Our research and advocacy are making a measurable difference across Uganda
          </h2>
        </div>

        {/* Stats Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                {/* <div className="flex justify-center mb-3">
                  <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" strokeWidth={1.5} />
                </div> */}

                {/* Number */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gold">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>

                {/* Label */}
                <p className="text-xs md:text-sm text-gray-200 leading-snug px-1 font-light">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
