export default function ImageStrip() {
  // Actual images from Pexels
  const images = [
    { 
      url: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Research and Development'
    },
    { 
      url: '/images/strip/community.jpg',
      alt: 'Community'
    },
    { 
      url: '/images/strip/group_photo.png',
      alt: 'Group Photo'
    },
    { 
      url: 'https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Healthcare Impact'
    },
    { 
      url: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Inclusive Development'
    },
    { 
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team Collaboration'
    },
    { 
      url: 'https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Community Healthcare'
    },
    { 
      url: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Research Meeting'
    }
  ];

  return (
    <section className="bg-white">
      <div className="w-full">
        {/* Scrollable Image Strip */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-0 min-w-max">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Caption */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600 mt-8 italic">
            Our work in action: Research, Community Engagement, Policy Development, Healthcare Impact & Inclusive Development
          </p>
        </div> */}
      </div>
    </section>
  );
}
