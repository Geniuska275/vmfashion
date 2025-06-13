

export default function CircularCategoryCard({
  title,
  image,
  href = "#",
  bgColor = "bg-gray-100",
}) {
  return (
    <a href={href} className="flex flex-col items-center group cursor-pointer">
      <div
        className={`w-24 h-24 sm:w-32 sm:h-32 md:w-24 md:h-24 rounded-full ${bgColor} overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
      >
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <span className="text-xs sm:text-sm text-center text-gray-700 font-medium leading-tight max-w-[120px]">
        {title}
      </span>
    </a>
  )
}
