import React, { useState } from 'react'
import Navbar from './Navbar'
import logo from "./vm.jpeg"
import ng from "./NG.webp"
import { Heart, Search, ShoppingBag, User } from 'lucide-react'
import LoginModal from './LoginModal'
import AuthModal from './AuthModal'
function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState("login")
  const [searchQuery, setSearchQuery] = useState("")

  const openLoginModal = () => {
    setAuthModalTab("login")
    setIsAuthModalOpen(true)
  }

  const openSignupModal = () => {
    setAuthModalTab("signup")
    setIsAuthModalOpen(true)
  }
  return (
        <div className=" sticky top-0 z-[1000]">
    
          {/* Header */}
           <header className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">          <div className="flex items-center">
                <img src={logo} className="w-15 h-10 mr-2 cover"  />
                <a href="/" className="mr-8">
                  <h1 className="text-2xl font-bold tracking-tight">VMFASHION</h1>
                </a>    
                        
                          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8 bg-gray-100 rounded-md md:w-[600px]">
            <input
              type="text"
              placeholder="Search for Wedding Dresses"
              className="w-full py-2 px-4 bg-transparent focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="p-2" aria-label="Search">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
          </div>
             </div>          <div className="flex items-center space-x-6">
                           <a href="#" className="text-yellow-600 hidden md:block">              Need Help?             </a>            <a href="#" className="text-gray-700">
                 <User className="h-6 w-6"   onClick={openLoginModal} />
              </a>
                <a href="#" className="text-gray-700">
                  <Heart className="h-6 w-6" />
                </a>
                 <a href="#" className="text-gray-700">
                  <ShoppingBag className="h-6 w-6" />
                </a>
               <img src={ng}  className='shadow rounded'/>
              </div>
            </div>
          </header>
           <Navbar /> 
            {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} initialTab={authModalTab} />
            
           </div>
  )
}

export default Header