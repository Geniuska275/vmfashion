

import { useState } from "react"
import { Heart } from "lucide-react"
import image3 from "../images/k3.avif"
import image2 from "../images/k2.avif"
import image1 from "../images/k1.avif"
import image4 from "../images/k4.avif"
import image5 from "../images/k5.avif"
import image6 from "../images/k6.avif"
import image7 from "../images/k7.avif"
import image8 from "../images/k8.avif"
import image9 from "../images/k9.avif"
import image10 from "../images/k10.avif"
import { Link } from "react-router-dom"















const products = [
  {
    id: 1,
    name: "Dark Beige Cotton Printed Boy's Kurta Pajama",
    image: image1,
    originalPrice: "£96",
    salePrice: "£64",
    discount: "33% Off",
    colors: ["#F4D03F", "#E8DAEF", "#F8C471"],
    fastDelivery: true,
  },
  {
    id: 2,
    name: "Peacock Blue Georgette Embroidered Girl's Lehenga",
    image: image2,
    originalPrice: "£104",
    salePrice: "£94",
    discount: "10% Off",
    colors: ["#1B4F72", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 3,
    name: "Navy Blue Cotton Silk Churidar Kid's Kurta Pajama",
    image:image3,
    originalPrice: "£88",
    salePrice: "£79",
    discount: "10% Off",
    colors: ["#F1948A", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 4,
    name: "Cream Art Silk Embroidered kid's Kurta Pajama",
    image:image4 ,
    originalPrice: "£110",
    salePrice: "£79",
    discount: "28% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 5,
    name: "Straight Cut Men Kurta Pajama in Dupion Silk Navy Blue for Party",
    image: image5,
    originalPrice: "£43",
    salePrice: "£39",
    discount: "9% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 6,
    name: "Dark Black Dupion Silk Men Kurta Pajama",
    image: image6,
    originalPrice: "£51",
    salePrice: "£59",
    discount: "24% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 7,
    name: "Embroidered Net Mauve Taupe Lehenga",
    image: image7,
    originalPrice: "£168",
    salePrice: "£129",
    discount: "23% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 8,
    name: "Grey Net A Line Embroidered Lehenga",
    image: image8,
    originalPrice: "£132",
    salePrice: "£129",
    discount: "2% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 9,
    name: "Punch Pink Net A Line Embroidered Lehenga",
    image: image9,
    originalPrice: "£162",
    salePrice: "£129",
    discount: "20% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 10,
    name: "A Line Lehenga in Georgette Peacock Blue for Sangeet",
    image:image10,
    originalPrice: "£158",
    salePrice: "£129",
    discount: "18% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  

]

export default function KidsProductGrid() {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (productId) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <Link to={`/kids-product/${product.id}`}>

        <div key={product.id} className="group cursor-pointer">
          <div className=" my-5 relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] mb-3">
            {/* Fast Delivery Badge */}
            {product.fastDelivery && (
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">48 Hours Dispatch</span>
              </div>
            )}

            {/* Product Image */}
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300"
              />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">{product.salePrice}</span>
              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
              <span className="text-xs text-red-600 font-medium">({product.discount})</span>
            </div>

            {/* Product Name */}
            <h3 className="text-sm text-gray-700 line-clamp-2 leading-tight">{product.name}</h3>

            {/* Colors and Wishlist */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {product.colors.map((color, index) => (
                  <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <button
                onClick={() => toggleWishlist(product.id)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                <Heart
                  className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                  />
              </button>
            </div>
          </div>
        </div>
                  </Link>
      ))}
    </div>
  )
}