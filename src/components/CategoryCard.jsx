
export default function CategoryCard({ title, image, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="aspect-[4/5] relative">
        <img
         title={title}
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">{title}</h3>
        </div>
      </div>
    </a>
  )
}
