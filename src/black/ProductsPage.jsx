import { Link } from "react-router-dom"
import Layout from "./Layout"
import ProductGrid from "./ProductGrid"

function ProductsPage({ category }) {
  const categoryTitles = {
    "made-to-measure": "Made to Measure Dresses",
    lehengas: "Lehengas",
    anarkalis: "Anarkalis",
    sararas: "Sararas",
    drapes: "Drapes",
    default: "Product Catalogue",
  }

  const title = category ? categoryTitles[category] : categoryTitles.default

  return (
    <Layout>
      <section className="w-full">
        <h2 className="font-playfair text-2xl md:text-4xl lg:text-2xl font-bold mb-8">{title}</h2>
        {/* <ul className="flex flex-col">
          <Link to="/products/made-to-measure" className="mb-4">
            <a  className="text-yellow-500 hover:underline">Made to Measure Dresses</a>
          </Link>
          <Link to="/products/lehengas" className="mb-4">
            <a className="text-yellow-500 hover:underline">Lehengas</a>
          </Link>
          <Link to='/products/anarkalis' className="mb-4">
            <a  className="text-yellow-500 hover:underline">Anarkalis</a>
          </Link>
          <Link to='/products/sararas' className="mb-4">
            <a  className="text-yellow-500 hover:underline">Sararas</a>
          </Link>
          <Link to='/products/drapes' className="mb-4">
            <a  className="text-yellow-500 hover:underline">Drapes</a>
          </Link>
        </ul> */}


        <ProductGrid  />
      </section>
    </Layout>
  )
}

export default ProductsPage
