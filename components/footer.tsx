import { Church, Facebook, Instagram, Youtube, Mail, MapPin, Clock } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/61559491896121",
    icon: Facebook,
    label: "Like our page",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mka.teklehaymanot",
    icon: Instagram,
    label: "Follow us on Instagram",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@kidusurael9370",
    icon: Youtube,
    label: "Subscribe to our channel",
  },
]

const quickLinks = [
  { name: "ቀዳሚ ገጽ", english: "Home", href: "#" },
  { name: "ስለ እኛ", english: "About Us", href: "#about" },
  { name: "አገልግሎት", english: "Services", href: "#services" },
  { name: "መርሐ ግብራት", english: "Programs", href: "#programs" },
  { name: "ያግኙን", english: "Contact", href: "#contact" },
]

const services = [
  { name: "ሥርዓተ ጥምቀት", english: "Baptism", href: "/baptism" },
  { name: "ሥርዓተ ጋብቻ", english: "Wedding", href: "/wedding" },
  { name: "ጸሎተ ፍትሐት", english: "Prayer Service", href: "/prayer" },
  { name: "በጸሎት አስቡን", english: "Prayer Requests", href: "/prayer-requests" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Social Media Section */}
      <div className="border-b border-background/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 font-serif">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-2 p-4 rounded-lg transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-8 w-8" />
                  <span className="text-sm font-medium">{social.name}</span>
                  <span className="text-xs opacity-75">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Church className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-serif">ደብረ ጽጌ ቅዱስ ዑራኤል </h2>
                <p className="text-sm opacity-75"> Newcastle Debre Tsige Kidus Urael Ethiopian Orthodox Church</p>
              </div>
            </div>

            <p className="text-sm opacity-90 mb-6 font-serif leading-relaxed">
              በኒውካስል የሚገኘው የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ለሁሉም ምእመናን መንፈሳዊ መኖሪያ ነው። ሁሉንም በፍቅር እንቀበላለን።
            </p>

            <p className="text-xs opacity-75 leading-relaxed">
              The Ethiopian Orthodox Tewahdo Church in Newcastle is a spiritual home for all believers. We welcome
              everyone with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-colors block py-1"
                  >
                    <span className="font-serif">{link.name}</span>
                    <span className="text-xs block opacity-60">{link.english}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-colors block py-1"
                  >
                    <span className="font-serif">{service.name}</span>
                    <span className="text-xs block opacity-60">{service.english}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Address</h4>
                <p className="text-xs opacity-75">
                  Newcastle, United Kingdom
                  <br />
                  <a
                    href="https://maps.app.goo.gl/gWQ5CbZJxrrrY6MA6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Service Times</h4>
                <p className="text-xs opacity-75">
                  Saturday: 07:00 AM
                  <br />
                  Sunday: 02:00 PM
                  <br />
                  Special Services: As announced
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Contact</h4>
                <p className="text-xs opacity-75">
                  For inquiries and spiritual guidance
                  <br />
                  <a href="mailto:info@abuneteklehaymanot.org" className="text-primary hover:underline">
                    Contact Church
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-75 text-center md:text-left">
              © 2025 - Debre Tsige Kidus Urael Church in Newcastle. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs opacity-60">
              <a href="#privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <span>•</span>
              <span>Built with ❤️ for our community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
