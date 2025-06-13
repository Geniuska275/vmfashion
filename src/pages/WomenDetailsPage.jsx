
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





import { useState } from "react"
import {  Share, ShoppingBag, Star, Info, Edit } from "lucide-react"
import { useParams } from "react-router-dom"

export default function WomenDetailPage() {
    const {id}=useParams()
    console.log(id)

    
    
    const products = [
      {
        id: 1,
        name: "Net Light Beige Sequins Embroidered Indo-Western Saree For Eid",
        image: image1,
        originalPrice: "194",
        salePrice: "149",
        discount: "30% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 2,
        name: "Light Beige Net Sequins Embroidered Cocktail And Eid Saree",
        image: image2,
        originalPrice: "109",
        salePrice: "84",
        discount: "23% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 3,
        name: "Black Velvet Zari Embroidered Dhoti Pant Style Saree for Eid",
        image:image3,
        originalPrice: "168",
        salePrice: "129",
        discount: "23% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 4,
        name: "Soft Silk Pink Indo-Western Saree",
        image:image4 ,
        originalPrice: "265",
        salePrice: "199",
        discount: "25% Off",
        rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 5,
        name: "Mustard Yellow Satin Pant Style Saree For Eid",
        image: image5,
        originalPrice: "221",
        salePrice: "169",
        discount: "24% Off",
        rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
        {
        id: 6,
        name: "Prussian Blue Embroidered Party Wear Silk Ombre Saree",
        image: image6,
        originalPrice: "222",
        salePrice: "139",
        discount: "37% Off",
        rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 7,
        name: "Sage Green Net Sequins Embroidered Fancy Eid Saree",
        image: image7,
        originalPrice: "779",
        salePrice: "599",
        discount: "23% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
        {
        id: 8,
        name: "Dark Maroon Net Sequins Embroidered Heavy Saree ",
        image: image8,
        originalPrice: "174",
        salePrice: "129",
        discount: "26% Off",
        rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 9,
        name: "Soft Silk Salmon Peach Indo-Western Saree",
        image: image9,
        originalPrice: "265",
        salePrice: "199",
        discount: "25% Off",
        rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
        {
        id: 10,
        name: "Soft Silk Mint Blue Indo-Western Saree",
        image:image10,
        originalPrice: "265",
        salePrice: "199",
        discount: "24% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 11,
        name: "Sequins Embroidered Off White Heavy Georgette Saree",
        image: image11,
        originalPrice: "126",
        salePrice: "79",
        discount: "37% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 12,
        name: "Embroidered Satin Silk Grey Beige Bollywood Saree",
        image: image12,
        originalPrice: "167",
        salePrice: "139",
        discount: "17% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 13,
        name: "Black Georgette Party Wear Saree with Sequins & Sleeveless Blouse",
        image: image13,
        originalPrice: "133",
        salePrice: "109",
        discount: "18% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 14,
        name: "Light Peach Net Sequins Embroidered Heavy Saree",
        image: image14,
        originalPrice: "163",
        salePrice: "129",
        discount: "21% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
      {
        id: 15,
        name: "Dusty Pink Georgette Floral Print Saree For Sangeet",
        image: image15,
        originalPrice: "127",
        salePrice: "84",
        discount: "34% Off",
         rating: 5,
    reviews: 3,
    designNo: "LSTV129697",
    dispatchDate: "14-June-2025",
    deliveryTime: "2 - 3 Business Days From Dispatch Date",
      },
    
    
    
    ]
    
    
      console.log(id)
    const product=products.find((p)=>p.id===+id)
    console.log(product)
  const [selectedSize, setSelectedSize] = useState("standard")
  const [addOns, setAddOns] = useState([
    {
      id: "hijab",
      name: "Plain Matching Hijab",
      originalPrice: 30,
      salePrice: 20,
      selected: false,
    },
    {
      id: "potli",
      name: "Matching Potli",
      originalPrice: 53,
      salePrice: 35,
      selected: false,
    },
  ])
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)


    
  const toggleAddOn = (id) => {
    setAddOns((prev) => prev.map((addon) => (addon.id === id ? { ...addon, selected: !addon.selected } : addon)))
  }

  const calculateTotal = () => {
    let total = +product.originalPrice
    if (selectedSize === "custom") {
      total += 20
    }
    addOns.forEach((addon) => {
      if (addon.selected) {
        total += addon.salePrice
      }
    })
    console.log(total)
    return total * quantity
  }

  console.log(calculateTotal())

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      tailoring: selectedSize === "custom" ? "Custom Tailored" : "Standard Size",
      addOns: addOns.filter((addon) => addon.selected),
      quantity,
    }

    // Here you would typically dispatch to a cart context or state management
    console.log("Adding to cart:", cartItem)
    alert(`Added to cart! Total: £${calculateTotal()}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
            48 Hours Dispatch
          </div>
          <div className="absolute top-4 right-4">
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Share className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Title and Price */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl font-bold text-gray-900">£{product.price}</span>
              <span className="text-xl text-gray-500 line-through">£{product.originalPrice}</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                [{product.discount}]
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Design No : {product.designNo}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating}/5 · {product.reviews} reviews
              </span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Estimated Dispatch Date:</span>
                <p className="text-gray-600">{product.dispatchDate}</p>
              </div>
              <div>
                <span className="font-medium">Delivery Date:</span>
                <p className="text-gray-600">{product.deliveryTime}</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-between items-center py-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 text-xs">↩️</span>
              </div>
              <p className="text-xs text-gray-600">Easy Returns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-yellow-600 text-xs">⭐</span>
              </div>
              <p className="text-xs text-gray-600">Satisfaction Guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 text-xs">💰</span>
              </div>
              <p className="text-xs text-gray-600">Money Back Guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 text-xs">🔒</span>
              </div>
              <p className="text-xs text-gray-600">Secure Checkout</p>
            </div>
          </div>

          {/* Tailoring Service */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-medium">Tailoring Service</h3>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tailoring"
                  value="standard"
                  checked={selectedSize === "standard"}
                  onChange={() => setSelectedSize("standard")}
                  className="mr-3"
                />
                <span>Standard Size</span>
                <div className="ml-auto flex gap-2">
                  <a href="#" className="text-rose-600 text-sm hover:underline">
                    Size Chart
                  </a>
                  <a href="#" className="text-rose-600 text-sm hover:underline">
                    How to Measure
                  </a>
                </div>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tailoring"
                  value="custom"
                  checked={selectedSize === "custom"}
                  onChange={() => setSelectedSize("custom")}
                  className="mr-3"
                />
                <span>Custom Tailored £20</span>
                <span className="ml-2 text-gray-600">+ £0.00</span>
              </label>
              {selectedSize === "custom" && (
                <p className="text-sm text-gray-600 ml-6">
                  Customize your own designs. Our sizing reflects the true bell
                </p>
              )}
            </div>
          </div>

          {/* Add Ons */}
          <div>
            <h3 className="text-lg font-medium mb-4">Add On's</h3>
            <div className="space-y-3">
              {addOns.map((addon) => (
                <label key={addon.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={addon.selected}
                      onChange={() => toggleAddOn(addon.id)}
                      className="mr-3"
                    />
                    <span>{addon.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through">£{addon.originalPrice}</span>
                    <span className="font-medium">+ £{addon.salePrice}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-rose-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Bag - £{calculateTotal(+product.price)}
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Heart className={`w-6 h-6 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
          </div>

          {/* Help Section */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Edit className="w-5 h-5 text-rose-600" />
              <span className="text-gray-700">Need help with the product? Click here.</span>
            </div>
          </div>

          {/* Promotional Offer */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Enjoy an Extra 10% Off on Your Order.</h4>
            <p className="text-sm text-gray-600 mb-2">Coupon Code: EOS5</p>
            <p className="text-sm text-gray-600">Expires on 30 June, 2025.</p>
            <button className="text-rose-600 text-sm hover:underline mt-2">View Terms</button>
          </div>
        </div>
      </div>
    </div>
  )
}
