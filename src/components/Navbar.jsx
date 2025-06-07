

import { useState } from "react" 

const navItems = [
  { name: "Wedding Store", href: "#" },
  { name: "Salwar Kameez", href: "#" },
  { name: "Bridal", href: "#", highlight: true },
  { name: "Saree", href: "#" },
  { name: "Lehenga", href: "#" },
  { name: "Indo Western", href: "#" },
  { name: "Plus Size", href: "#", highlight: true },
  { name: "Women", href: "#" },
  { name: "Men", href: "#" },
  { name: "Kids", href: "#" },
  { name: "Jewellery", href: "#" },
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center space-x-6 overflow-x-auto whitespace-nowrap py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-sm font-medium hover:text-yellow-600 ${
                  item.highlight ? "text-yellow-600" : "text-gray-700"
                } ${activeItem === item.name ? "border-b-2 border-yellow-600" : ""}`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="text-sm font-medium bg-yellow-600 text-white px-3 py-1 rounded">
              Flat 70% Off
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
