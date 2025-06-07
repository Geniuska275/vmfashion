"use client"

import { useState } from "react"

const categories = [
  { id: "sarees", name: "Sarees", checked: false },
  { id: "leggings-salwar", name: "Leggings / Salwar", checked: false },
]

const sizes = [
  { id: "32-uk-2", name: "32 / UK-2", checked: false },
  { id: "33-uk-4", name: "33 / UK-4", checked: false },
  { id: "34-uk-6", name: "34 / UK-6", checked: false },
  { id: "35-uk-8", name: "35 / UK-8", checked: false },
  { id: "36-uk-10", name: "36 / UK-10", checked: false },
]

export default function FilterSidebar() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [sizeSearch, setSizeSearch] = useState("")

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleSize = (sizeId) => {
    setSelectedSizes((prev) => (prev.includes(sizeId) ? prev.filter((id) => id !== sizeId) : [...prev, sizeId]))
  }

  return (
    <div className=" mt-6 w-full lg:w-64 space-y-6">
      {/* Category Filter */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">CATEGORY</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
              />
              <span className="ml-3 text-sm text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">SIZE</h3>

        {/* Size Search */}
        <div>
          <input
            type="text"
            placeholder="Search"
            value={sizeSearch}
            onChange={(e) => setSizeSearch(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Size Checkboxes */}
        <div className="space-y-3">
          {sizes.map((size) => (
            <label key={size.id} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={selectedSizes.includes(size.id)}
                onChange={() => toggleSize(size.id)}
              />
              <span className="ml-3 text-sm text-gray-700">{size.name}</span>
            </label>
          ))}
        </div>

        {/* View More Link */}
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View More</button>
      </div>
    </div>
  )
}
