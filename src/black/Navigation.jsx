"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"

function Navigation({ className }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Product Catalogue", href: "/products" },
    // { name: "Made to Measure Dresses", href: "/made-to-measure" },
    // { name: "Lehengas", href: "/lehengas" },
    // { name: "Anarkalis", href: "/anarkalis" },
    // { name: "Sararas", href: "/sararas" },
    // { name: "Drapes", href: "/drapes" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms and Conditions", href: "/terms" },
  ]

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center text-amber-300 hover:text-amber-200"
      >
        <Menu className="h-6 w-6 mr-2" />
        <span>Menu</span>
      </button>

      <nav className={`${isOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
        <ul className="space-y-6 text-xl md:text-2xl">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center">
              <span className="mr-2 text-2xl">o</span>
              <Link
                to={item.href}
                className={`font-playfair text-amber-300 hover:text-amber-200 transition-colors ${
                  location.pathname === item.href ? "text-amber-200" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
