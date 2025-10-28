import { ArrowRight } from 'lucide-react';

export default function FeaturedResearch() {
  const articles = [
    {
      id: 1,
      title: 'Bridging Health Law and Access to Care in Rural Uganda',
      excerpt: 'Examining the critical intersection of healthcare policy and accessibility challenges in underserved communities.',
      image: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Health Policy',
      readTime: '5 min read',
      date: 'Oct 15, 2024'
    },
    {
      id: 2,
      title: 'Why Evidence Matters in Climate Policy',
      excerpt: 'Data-driven insights reveal how evidence-based approaches are reshaping Uganda&apos;s climate adaptation strategies.',
      image: 'https://images.pexels.com/photos/8466821/pexels-photo-8466821.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Climate & Environment',
      readTime: '6 min read',
      date: 'Oct 8, 2024'
    },
    {
      id: 3,
      title: 'Empowering Youth Through Skills-Based Education Reform',
      excerpt: 'Innovative education policies are transforming how young Ugandans prepare for the future workforce.',
      image: 'https://images.pexels.com/photos/8500450/pexels-photo-8500450.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education',
      readTime: '7 min read',
      date: 'Sep 28, 2024'
    },
    {
      id: 4,
      title: 'Strengthening Democracy Through Civic Engagement',
      excerpt: 'Research-backed strategies for building participatory governance and accountability in local communities.',
      image: 'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Governance',
      readTime: '5 min read',
      date: 'Sep 20, 2024'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">
            Featured Research & Insights
          </p>
          <h2 className="section-title mb-6">
            Fresh Insights. Real Impact.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest publications, thought pieces, and advocacy updates shaping Uganda&apos;s development story.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-teal transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <button className="group/btn inline-flex items-center text-primary font-semibold hover:text-teal transition-colors duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg">
            View All Research
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
