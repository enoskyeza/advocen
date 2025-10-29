import { Wrench, Mail, Linkedin, Twitter, Globe } from 'lucide-react'

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-700 to-teal-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-4xl w-full">
        {/* Logo Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <img 
              src="/logo-light.png" 
              alt="Advocen Initiatives Logo" 
              className="h-56 sm:h-56 md:h-64 w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>


          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent text-center mb-4 font-serif">
            Website Under Maintenance
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            We're working hard to bring you an enhanced experience. Our new website will be launching soon.
          </p>

          {/* Contact Info */}
          <div className=" pt-8">
            <p className="text-center text-gray-300 mb-4 font-medium">
              For inquiries, please reach out to us:
            </p>
            <div className="flex justify-center items-center gap-6 mb-6">
              <a 
                href="mailto:info@advoceninitiative.org" 
                className="flex items-center gap-2 text-yellow-300 hover:text-teal transition-colors duration-300 group"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-sm font-medium">info@advoceninitiative.org</span>
              </a>
            </div>

            {/* Social Links Placeholder */}
            <div className="flex justify-center items-center gap-4">
              <a 
                href="#" 
                className="p-3 bg-orange-200/10 rounded-full hover:bg-primary hover:text-white text-yellow-300 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-orange-200/10 rounded-full hover:bg-primary hover:text-white text-yellow-300 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-orange-200/10 rounded-full hover:bg-primary hover:text-white text-yellow-300 transition-all duration-300 hover:scale-110"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

        {/* Footer */}
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-accent/90 text-sm">
            © {new Date().getFullYear()} Advocen Initiatives. All rights reserved.
          </p>
          <p className="text-accent/70 text-xs mt-2 mb-4">
            Evidence-Based Policy • Health Law • Inclusive Development
          </p>
        </div>
      </div>
    </div>
  )
}

export default MaintenancePage
