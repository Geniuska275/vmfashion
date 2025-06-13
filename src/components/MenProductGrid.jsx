

import { useState } from "react"
import { Heart } from "lucide-react"
import image3 from "../images/m3.avif"
import image2 from "../images/m2.avif"
import image1 from "../images/m1.avif"
import image4 from "../images/m4.avif"
import image5 from "../images/m5.avif"
import image6 from "../images/m6.avif"
import image7 from "../images/m7.avif"
import image8 from "../images/m8.avif"
import image9 from "../images/m9.avif"
import image10 from "../images/m10.avif"
import { Link } from "react-router-dom"















const products = [
  {
    id: 1,
    name: "Light Dusty Green Jacquard Jacket Style Men's Sherwani For Eid",
    image: image1,
    originalPrice: "£231",
    salePrice: "£189",
    discount: "18% Off",
    colors: ["#F4D03F", "#E8DAEF", "#F8C471"],
    fastDelivery: true,
  },
  {
    id: 2,
    name: "Navy Blue Raw Silk Embroidered Men's Kurta Pajama",
    image: image2,
    originalPrice: "£476",
    salePrice: "£319",
    discount: "33% Off",
    colors: ["#1B4F72", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 3,
    name: "Navy Blue Silk Embroidered Straight Cut Men's Kurta Pajama",
    image:image3,
    originalPrice: "£100",
    salePrice: "£79",
    discount: "21% Off",
    colors: ["#F1948A", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 4,
    name: "Plum Purple Embroidered Dupion Silk Straight Cut Men's Kurta",
    image:image4 ,
    originalPrice: "£95",
    salePrice: "£59",
    discount: "38% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 5,
    name: "Teal Green Embroidered Dupion Silk Straight Cut Men's Kurta",
    image: image5,
    originalPrice: "£92",
    salePrice: "£69",
    discount: "25% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 6,
    name: "Blue Embroidered Dupion Silk Straight Cut Men's Kurta",
    image: image6,
    originalPrice: "£76",
    salePrice: "£59",
    discount: "22% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 7,
    name: "Purple Embroidered Dupion Silk Men's Kurta For Festive Wear",
    image: image7,
    originalPrice: "£80",
    salePrice: "£69",
    discount: "14% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 8,
    name: "Beige Embroidered Dupion Silk Men's Kurta For Festive Wear ",
    image: image8,
    originalPrice: "£95",
    salePrice: "£69",
    discount: "27% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 9,
    name: "Beige Embroidered Dupion Silk Men's Kurta Churidar",
    image: image9,
    originalPrice: "£95",
    salePrice: "£69",
    discount: "27% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 10,
    name: "Pastel Pink Silk Blend Embroidered Men's Jodhpuri Suit For Wedding",
    image:image10,
    originalPrice: "£365",
    salePrice: "£219",
    discount: "40% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  

]

export default function MenProductGrid() {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (productId) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <Link to={`/product/${product?.id}`}>

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