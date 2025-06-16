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
        <ul>
          <li className="mb-4">
            <a href="/products/made-to-measure" className="text-yellow-500 hover:underline">Made to Measure Dresses</a>
          </li>
          <li className="mb-4">
            <a href="/products/lehengas" className="text-yellow-500 hover:underline">Lehengas</a>
          </li>
          <li className="mb-4">
            <a href="/products/anarkalis" className="text-yellow-500 hover:underline">Anarkalis</a>
          </li>
          <li className="mb-4">
            <a href="/products/sararas" className="text-yellow-500 hover:underline">Sararas</a>
          </li>
          <li className="mb-4">
            <a href="/products/drapes" className="text-yellow-500 hover:underline">Drapes</a>
          </li>
        </ul>


        {/* <ProductGrid category={category} /> */}
      </section>
    </Layout>
  )
}

export default ProductsPage
