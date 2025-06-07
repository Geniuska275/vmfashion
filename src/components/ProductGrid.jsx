"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Gray gardigan,blue jeans and a pair of brown chunky heeled shoes",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    originalPrice: "£181",
    salePrice: "£139",
    discount: "23% Off",
    colors: ["#F4D03F", "#E8DAEF", "#F8C471"],
    fastDelivery: true,
  },
  {
    id: 2,
    name: "white crew neck t-shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    originalPrice: "£129",
    salePrice: "£99",
    discount: "23% Off",
    colors: ["#1B4F72", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 3,
    name: "nice female brown shorts",
    image: "https://media.istockphoto.com/id/2180316537/photo/beautiful-girl-against-the-background-of-white-houses-of-santorini.webp?a=1&b=1&s=612x612&w=0&k=20&c=a5NTXFZbD0yUBu3jKxxdZqYSaKSHPQviQE9BJAbS48E=",
    originalPrice: "£219",
    salePrice: "£149",
    discount: "32% Off",
    colors: ["#F1948A", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 4,
    name: "A beautiful Athletic wear",
    image: "https://media.istockphoto.com/id/2186993507/photo/young-woman-in-athletic-wear-sitting-on-fitness-ball.jpg?s=612x612&w=0&k=20&c=kFzahgIrG1gE-Y7l0sbmT0f-ln-XF6smFqmJOm1WG3w=",
    originalPrice: "£199",
    salePrice: "£119",
    discount: "40% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 5,
    name: "Men’s Classic Denim Jacket",
    image: "https://images.unsplash.com/photo-1711888386245-9ca3477a5977?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
    originalPrice: "£195",
    salePrice: "£149",
    discount: "24% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 6,
    name: "Plain orange suit with white trouser",
    image: "https://media.istockphoto.com/id/2188521577/photo/a-lot-of-work-for-today.webp?a=1&b=1&s=612x612&w=0&k=20&c=zvcMacVlZQ3OpTEGfeqocbjshha5ljFuobfjIxV4oFk=",
    originalPrice: "£199",
    salePrice: "£119",
    discount: "40% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 7,
    name: "A yellow female tracksuit",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "£195",
    salePrice: "£149",
    discount: "24% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 8,
    name: "Female sweater ",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "£199",
    salePrice: "£119",
    discount: "40% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 9,
    name: "a female white handless top with a black stripped trouser",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    originalPrice: "£195",
    salePrice: "£149",
    discount: "24% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 10,
    name: "A pair of black boots and a pink jacket",
    image: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "£195",
    salePrice: "£149",
    discount: "24% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 11,
    name: "A Gray long sleeve shirt",
    image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    originalPrice: "£199",
    salePrice: "£119",
    discount: "40% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 12,
    name: "A Cream blazer",
    image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    originalPrice: "£195",
    salePrice: "£149",
    discount: "24% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },



]

export default function ProductGrid() {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (productId) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
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
      ))}
    </div>
  )
}