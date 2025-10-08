"use client"

import { useEffect } from "react"
import Navigation from "./Navigation"
import Logo from "./Logo"
import Footer from "./Footer"

function Layout({ children }) {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-amber-300">
      <h1 className="text-black font-bold text-3xl text-center">This website is undergoing maintenance... </h1>
      <p className="text-black font-bold  text-center">Kindly contact the developer for more info.</p>
      {/* <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row items-center justify-between mb-12">
          <Logo />
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <Navigation className="w-full md:w-1/4" />
          <main className="w-full md:w-3/4">{children}</main>
        </div>
        <Footer className="mt-12" />
      </div> */}
    </div>
  )
}

export default Layout
