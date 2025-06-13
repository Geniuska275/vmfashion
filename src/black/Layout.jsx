"use client"

import { useEffect } from "react"
import Navigation from "./Navigation"
import Logo from "./Logo"

function Layout({ children }) {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-amber-300">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row items-center justify-between mb-12">
          <Logo />
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <Navigation className="w-full md:w-1/4" />
          <main className="w-full md:w-3/4">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
