import Breadcrumb from "../components/Breadcrumb"
import CircularCategoryCard from "../components/CircularCatergoryCard"
import p1 from "../images/lehengas.avif"
import p2 from "../images/Bridesmaid-Lehengas.avif"
import p3 from "../images/best-seller.avif"
import p4 from "../images/new-arrival.avif"
import p5 from "../images/ready.avif"
import p6 from "../images/plus-size.avif"
import p7 from "../images/party-wear.avif"
import p8 from "../images/bridal.avif"
import ProductListingHeader from "../components/ProductListingHeader"
import ProductListing from "../components/ProductListing"
import ProductGrid from "../components/ProductGrid"
import ProductList from "../components/ProductList"









const breadcrumbItems = [
  { label: "Vm Fashion", href: "/" },
  { label: "Women Clothing", href: "/women" },
  { label: " Women Ethnic Dresses" },
]

const categoryCards = [
  {
    id: 1,
    title: "Wedding Lehengas",
    image: p1,
    href: "/lehenga/wedding",
    bgColor: "bg-rose-100",
  },
  {
    id: 2,
    title: "Bridesmaid Lehengas",
    image: p2,
    href: "/lehenga/bridesmaid",
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    title: "Best Seller Lehengas",
    image:p3,
    href: "/lehenga/bestseller",
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    title: "Latest Lehengas",
    image: p4,
    href: "/lehenga/latest",
    bgColor: "bg-teal-100",
  },
  {
    id: 5,
    title: "Ready To Wear",
    image: p5,
    href: "/lehenga/ready-to-wear",
    bgColor: "bg-purple-100",
  },
  {
    id: 6,
    title: "Plus Size Lehengas",
    image: p6,
    href: "/lehenga/plus-size",
    bgColor: "bg-yellow-100",
  },
  {
    id: 7,
    title: "Party Wear Lehengas",
    image: p7,
    href: "/lehenga/party-wear",
    bgColor: "bg-blue-100",
  },
  {
    id: 8,
    title: "Bridal Lehengas",
    image: p8,
    href: "/lehenga/bridal",
    bgColor: "bg-cyan-100",
  },
]

export default function Women() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Circular Category Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {categoryCards.map((card) => (
            <CircularCategoryCard
              key={card.id}
              title={card.title}
              image={card.image}
              href={card.href}
              bgColor={card.bgColor}
            />
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">Women's Ethnic Outfits and Dresses</h1>
        </div>

        {/* Welcome Description */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-md leading-relaxed">
           Shop the rich diversity of women's fashion with our Ethnic Wear for Women collection. We understand that beauty comes in all forms, and our ethnic wear caters to that diversity. Whether you're petite or plus size, our Indian Ethnic Wear for Women offers a wide range of styles to ensure you shine with confidence and sophistication.
          </p>
        </div>
      </div>
      <ProductList/>
    </div>
  )
}
