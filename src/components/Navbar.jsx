
import { Link } from "react-router-dom"
import { useState } from "react" 

const navItems = [
  { name: "Wedding Store", href: "/" },
  { name: "Salwar Kameez", href: "womens/salwar-kameez" },
  { name: "Bridal", href: "/bridal-dresses", highlight: true },
  { name: "Saree", href: "womens/sarees" },
  { name: "Lehenga", href: "/lehenga-choli" },
  { name: "Indo Western", href: "womens/indowestern" },
  { name: "Plus Size", href: "/plus-size-dresses", highlight: true },
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "Kids", href: "/kids" },
  { name: "Jewellery", href: "/Jewellery" },

]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center space-x-6 overflow-x-auto whitespace-nowrap py-4">
          {navItems.map((item) => (
            <Link to={item.href}>

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
          </Link>
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
