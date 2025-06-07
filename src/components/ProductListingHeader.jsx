"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const sortOptions = [
  "Trending",
  "Price: Low to High",
  "Price: High to Low",
  "Newest First",
  "Customer Rating",
  "Popularity",
  "Discount",
]

export default function ProductListingHeader({ productCount = 20, onSortChange}) {
  const [selectedSort, setSelectedSort] = useState("Trending")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSortChange = (option) => {
    setSelectedSort(option)
    setIsDropdownOpen(false)
    onSortChange?.(option)
  }

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      {/* Product Count */}
      <div className="text-gray-600 text-sm font-medium">{productCount.toLocaleString()} PRODUCTS</div>

      {/* Sort Dropdown */}
      <div className=" z-[100] relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between min-w-[200px] px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <span className="text-gray-700">
            Sort by : <span className="font-medium">{selectedSort}</span>
          </span>
          <ChevronDown
            className={`ml-2 h-4 w-4 text-gray-400 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <div className="py-1">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSortChange(option)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    selectedSort === option ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
