

import { useState } from "react"
import { Heart } from "lucide-react"
import image3 from "../images/p8.jpg"
import image2 from "../images/p17.jpg"
import image1 from "../images/p18.jpg"
import image4 from "../images/p10.jpg"
import image5 from "../images/p21.jpg"
import image6 from "../images/p20.jpg"
import image7 from "../images/p23.webp"
import image8 from "../images/p24.webp"
import image9 from "../images/p25.webp"
import image10 from "../images/p26.webp"
import image11 from "../images/p27.webp"
import image12 from "../images/p28.webp"
import image13 from "../images/p29.webp"
import image14 from "../images/p30.webp"
import image15 from "../images/p31.webp"
import { Link } from "react-router-dom"














const products = [
  {
    id: 1,
    name: "Net Light Beige Sequins Embroidered Indo-Western Saree For Eid",
    image: image1,
    originalPrice: "£194",
    salePrice: "£149",
    discount: "30% Off",
    colors: ["#F4D03F", "#E8DAEF", "#F8C471"],
    fastDelivery: true,
  },
  {
    id: 2,
    name: "Light Beige Net Sequins Embroidered Cocktail And Eid Saree",
    image: image2,
    originalPrice: "£109",
    salePrice: "£84",
    discount: "23% Off",
    colors: ["#1B4F72", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 3,
    name: "Black Velvet Zari Embroidered Dhoti Pant Style Saree for Eid",
    image:image3,
    originalPrice: "£168",
    salePrice: "£129",
    discount: "23% Off",
    colors: ["#F1948A", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 4,
    name: "Soft Silk Pink Indo-Western Saree",
    image:image4 ,
    originalPrice: "£265",
    salePrice: "£199",
    discount: "25% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 5,
    name: "Mustard Yellow Satin Pant Style Saree For Eid",
    image: image5,
    originalPrice: "£221",
    salePrice: "£169",
    discount: "24% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 6,
    name: "Prussian Blue Embroidered Party Wear Silk Ombre Saree",
    image: image6,
    originalPrice: "£222",
    salePrice: "£139",
    discount: "37% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 7,
    name: "Sage Green Net Sequins Embroidered Fancy Eid Saree",
    image: image7,
    originalPrice: "£779",
    salePrice: "£599",
    discount: "23% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 8,
    name: "Dark Maroon Net Sequins Embroidered Heavy Saree ",
    image: image8,
    originalPrice: "£174",
    salePrice: "£129",
    discount: "26% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 9,
    name: "Soft Silk Salmon Peach Indo-Western Saree",
    image: image9,
    originalPrice: "£265",
    salePrice: "£199",
    discount: "25% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
    {
    id: 10,
    name: "Soft Silk Mint Blue Indo-Western Saree",
    image:image10,
    originalPrice: "£265",
    salePrice: "£199",
    discount: "24% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 11,
    name: "Sequins Embroidered Off White Heavy Georgette Saree",
    image: image11,
    originalPrice: "£126",
    salePrice: "£79",
    discount: "37% Off",
    colors: ["#D5DBDB", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 12,
    name: "Embroidered Satin Silk Grey Beige Bollywood Saree",
    image: image12,
    originalPrice: "£167",
    salePrice: "£139",
    discount: "17% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 13,
    name: "Black Georgette Party Wear Saree with Sequins & Sleeveless Blouse",
    image: image13,
    originalPrice: "£133",
    salePrice: "£109",
    discount: "18% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 14,
    name: "Light Peach Net Sequins Embroidered Heavy Saree",
    image: image14,
    originalPrice: "£163",
    salePrice: "£129",
    discount: "21% Off",
    colors: ["#1C2833", "#F4D03F", "#E8DAEF"],
    fastDelivery: true,
  },
  {
    id: 15,
    name: "Dusty Pink Georgette Floral Print Saree For Sangeet",
    image: image15,
    originalPrice: "£127",
    salePrice: "£84",
    discount: "34% Off",
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
        <Link to={`/women-product/${product.id}`}>

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