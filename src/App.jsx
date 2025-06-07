
import { useState } from "react"
import { Search, ShoppingBag, Heart, User, ChevronDown } from "lucide-react"
import Navbar from "./components/Navbar"
import CategoryCircles from "./components/CategoryCircles"
import ProductGrid from "./components/ProductGrid"
import Filters from "./components/Filters"
import ProductListing from "./components/ProductListing"
import Footer from "./components/Footer"
import logo from "./vm.jpeg"
function App() {
  const [sortBy] = useState("Trending")

  return (
    <div className="min-h-screen bg-white">
      <h1 className="bg-black py-2 text-center text-white text-yellow-400">Customised Product,Whatsapp +157890004484</h1>
      <div className=" sticky top-0 z-[1000]">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} className="w-15 h-10 mr-2 cover"  />
            <a href="/" className="mr-8">
              <h1 className="text-2xl font-bold tracking-tight">VMFASHION</h1>
            </a>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search Products..."
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-[500px]"
                />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-yellow-600 hidden md:block">
              Need Help?
            </a>
            <a href="#" className="text-gray-700">
              <User className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-700">
              <Heart className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-700">
              <ShoppingBag className="h-6 w-6" />
            </a>
            <div className="h-6 w-6 bg-green-600"></div>
          </div>
        </div>
      </header>
      <Navbar />
                </div>


      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm">
          <a href="/" className="text-gray-600">
            Andaaz Fashion
          </a>
          <span className="mx-2">→</span>
          <span className="font-medium">Women Ethnic Dresses</span>
        </div>
      </div>

      {/* Category Circles */}
      <CategoryCircles />

      {/* <ProductGrid/> */}
      <ProductListing/>

    <Footer/>
    </div>
  )
}

export default App

