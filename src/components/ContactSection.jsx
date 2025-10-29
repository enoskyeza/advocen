import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="section-subtitle mb-3">Contact Us</p>
          <h2 className="section-title">We&apos;d love to hear from you</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Details + Form */}
          <div>
            <div className="space-y-4 mb-10 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-primary">Our Office</div>
                  <div>4th Floor, Crested Towers, Kampala, Uganda</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <div>+256 XXX XXXXXX</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <div>info@advocen.org</div>
              </div>
            </div>

            {/* Simple contact form (no backend) */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full border border-gray-300 px-4 py-3 h-32 resize-vertical focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" placeholder="How can we help?" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold hover:bg-teal transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Google Map */}
          <div>
            <div className="w-full h-[320px] sm:h-[380px] lg:h-full min-h-[320px] bg-gray-100">
              <iframe
                title="Crested Towers Kampala"
                src="https://www.google.com/maps?q=Crested+Towers,+Kampala,+Uganda&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
