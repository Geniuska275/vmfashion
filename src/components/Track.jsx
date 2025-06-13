

import { MapPin } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: "📷", href: "#", color: "text-pink-600" },
  { name: "Facebook", icon: "📘", href: "#", color: "text-blue-600" },
  { name: "Pinterest", icon: "📌", href: "#", color: "text-red-600" },
  { name: "LinkedIn", icon: "💼", href: "#", color: "text-blue-700" },
  { name: "Twitter", icon: "🐦", href: "#", color: "text-blue-400" },
  { name: "YouTube", icon: "📺", href: "#", color: "text-red-600" },
]

const worldwideStores = [
  { country: "UK", name: "Andaaz Fashion UK" },
  { country: "USA", name: "Andaaz Fashion USA" },
  { country: "MY", name: "Andaaz Fashion MY" },
  { country: "FR", name: "Andaaz Fashion FR" },
]

export default function CustomerServiceSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Need Help */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Need Help?</h2>

            <div className="space-y-6">
              {/* Call Us */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Get in touch +44 (0) 121 663 0409</h3>
                  <p className="text-sm text-gray-600">24/7 available customer service</p>
                </div>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
                  Call Us
                </button>
              </div>

              {/* Order Tracking */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Track your order</h3>
                  <p className="text-sm text-gray-600">Want to know if your order is processed and dispatched?</p>
                </div>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
                  Order Tracking
                </button>
              </div>

              {/* Email Us */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">For Sale Inquiry</h3>
                  <p className="text-sm text-gray-600">Don't hesitate</p>
                </div>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
                  Email Us
                </button>
              </div>

              {/* Live Chat */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Chat with Us</h3>
                  <p className="text-sm text-gray-600">With our expert designer</p>
                </div>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
                  Live Chat
                </button>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-sm text-gray-600">You can whatsapp +44 7494872020</p>
                </div>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Return Address & More */}
          <div>
            {/* Return Address */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Address</h2>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-rose-600 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-700">
                  <p className="font-medium">Andaaz Fashion</p>
                  <p>Unit 10 Watchmoor Trade Centre</p>
                  <p>Watchmoor rd, Camberley</p>
                  <p>Surrey GU15 3AJ</p>
                  <p>United Kingdom</p>
                  <p className="mt-2 text-sm">For Sale Inquiry: sales@andaazfashion.com</p>
                </div>
              </div>
            </div>

            {/* Stay in touch */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay in touch</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow ${social.color}`}
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Worldwide stores */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Worldwide stores</h2>
              <div className="grid grid-cols-2 gap-4">
                {worldwideStores.map((store) => (
                  <div key={store.country} className="text-center">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <p className="font-medium text-gray-900">{store.name}</p>
                      <p className="text-sm text-gray-600">{store.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
