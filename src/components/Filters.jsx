const categories = [
  { name: "Ready to Wear", image: "/placeholder.svg?height=150&width=150" },
  { name: "Pakistani Party Wear", image: "/placeholder.svg?height=150&width=150" },
  { name: "Salwar Kameez", image: "/placeholder.svg?height=150&width=150" },
  { name: "New Arrivals", image: "/placeholder.svg?height=150&width=150" },
  { name: "Traditional Wedding Dresses", image: "/placeholder.svg?height=150&width=150" },
  { name: "Indian Sarees", image: "/placeholder.svg?height=150&width=150" },
  { name: "Lehenga Choli", image: "/placeholder.svg?height=150&width=150" },
  { name: "Plus Size Dresses", image: "/placeholder.svg?height=150&width=150" },
]

export default function CategoryCircles() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <a key={category.name} href="#" className="flex flex-col items-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-2 border border-gray-200">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xs md:text-sm text-center">{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
