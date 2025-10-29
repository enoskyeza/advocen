import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-beige text-primary p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Visit Our Office</h3>
              </div>
              <p className="text-gray-700">
                Plot 123, Kampala Road<br />
                Kampala, Uganda<br />
                P.O. Box 12345
              </p>
            </div>

            <div className="bg-primary text-white p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-6 w-6 text-white" />
                <h3 className="text-xl font-bold">Call Us</h3>
              </div>
              <p className="text-white/90 mb-2">
                Main: +256 XXX XXXXXX
              </p>
              <p className="text-white/90">
                Mobile: +256 XXX XXXXXX
              </p>
            </div>

            <div className="bg-beige text-primary p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Email Us</h3>
              </div>
              <p className="text-gray-700 mb-2">
                General: info@advocen.org
              </p>
              <p className="text-gray-700">
                Research: research@advocen.org
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Details + Form */}
          <div>
            <div className="space-y-4 mb-10 text-gray-700">
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question, want to partner with us, or are interested in our research, we'd love to hear from you. Fill out the form and we'll respond within 24-48 hours.
              </p>
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
