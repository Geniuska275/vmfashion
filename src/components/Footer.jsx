

import { useState } from "react"

const searchTags = [
  "Best Selling Ethnic Fashion for Women",
  "Readymade Indian Dresses for women",
  "Mens Ethnic Wear",
  "Ethnic Wear for Kids",
  "Pakistani Wedding Dresses",
  "Plus Size Salwar Suits",
  "Islamic Wedding Dresses",
  "Punjabi Wedding Dresses",
  "Indian Gowns",
  "Bollywood Dresses",
]

const footerLinks = {
  designerCollection: [
    "Ethnic Wear",
    "Salwar Kameez",
    "Sarees",
    "Lehengas",
    "Gowns",
    "Kurtis",
    "Menswear",
    "Kidswear",
    "Plus Size Clothing",
    "Jewellery",
  ],
  aboutAndaaz: ["About Us", "Contact Us", "Our Blog", "PCI Compliance Certificate", "Return Request"],
  helpCentre: [
    "Help",
    "Delivery Policy",
    "Return Policy",
    "Privacy Policy",
    "Terms & Conditions",
    "Cmo Terms & Conditions",
  ],
  information: ["FAQ", "Standard Size Guide", "Shipping Charges", "Sitemap", "Pantone Palette", "Customize Your Dress"],
}

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* People also search for section */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">People also search for</h3>
          <div className="flex flex-wrap gap-3">
            {searchTags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Designer Collection */}
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-4">Designer Collection</h4>
            <ul className="space-y-2">
              {footerLinks.designerCollection.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-4">About VM Fashion</h4>
            <ul className="space-y-2">
              {footerLinks.aboutAndaaz.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Centre */}
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-4">Help Centre</h4>
            <ul className="space-y-2">
              {footerLinks.helpCentre.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-4">Information</h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-base font-medium text-gray-900 mb-2">Join VM Fashion</h4>
            <p className="text-sm text-gray-600 mb-4">and get 10% off & recieve exclusive offers.</p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-rose-700 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
