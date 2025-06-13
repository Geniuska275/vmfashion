import Breadcrumb from "../components/Breadcrumb"
import CategoryCard from "../components/CategoryCard"
import draped from "../images/draped.avif"
import summer from "../images/summer.avif"
import one  from "../images/one minute.avif"



const breadcrumbItems = [
  { label: "Vm Fashion", href: "/" },
  { label: "Women Clothing", href: "/women" },
  { label: "Sarees" },
]

const categoryCards = [
  {
    id: 1,
    title: "Pre Draped Sarees",
    image: draped,
    href: "/sarees/pre-draped",
  },
  {
    id: 2,
    title: "Summer Wedding",
    image: summer,
    href: "/sarees/summer-wedding",
  },
  {
    id: 3,
    title: "One Minute Saree",
    image: one,
    href: "/sarees/one-minute",
  },
]

export default function SareeCollection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Category Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryCards.map((card) => (
            <CategoryCard
              key={card.id}
              title={card.title}
              image={card.image}
              href={card.href}
              className="h-96 md:h-[500px]"
            />
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sarees</h1>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore the timeless beauty of Sarees, the Indian attire that weaves tradition and fashion into every drape.
            Whether it's a wedding, festival, or special occasion, Indian Sarees have been an integral part for
            centuries. Dive into our Designer Sarees collection and embrace the elegance of six yards of pure artistry.
          </p>
        </div>
      </div>
    </div>
  )
}
