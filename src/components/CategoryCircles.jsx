const categories = [
  { name: "Ready to Wear", image: "https://plus.unsplash.com/premium_photo-1669824376681-2a999a6facb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXJzfGVufDB8fDB8fHww" },
  { name: "Pakistani Party Wear", image: "https://plus.unsplash.com/premium_photo-1671305004252-17666fa2c42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhcnN8ZW58MHx8MHx8fDA%3D" },
  { name: "Salwar Kameez", image: "https://plus.unsplash.com/premium_photo-1673757106128-eaab1a42ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhcnN8ZW58MHx8MHx8fDA%3D" },
  { name: "New Arrivals", image: "https://plus.unsplash.com/premium_photo-1674420731094-e1a7e7f21c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Traditional Wedding Dresses", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhcnN8ZW58MHx8MHx8fDA%3Dlaceholder.svg?height=150&width=150" },
  { name: "Indian Sarees", image: "https://images.unsplash.com/photo-1594308482008-40c1396b4dff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYXJzfGVufDB8fDB8fHww" },
  { name: "Lehenga Choli", image: "https://images.unsplash.com/photo-1609123100658-04923eef862e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdlYXJzfGVufDB8fDB8fHww" },
  { name: "Plus Size Dresses", image: "https://images.unsplash.com/photo-1609123100658-04923eef862e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdlYXJzfGVufDB8fDB8fHww" },
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
