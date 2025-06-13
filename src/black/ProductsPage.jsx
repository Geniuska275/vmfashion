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
        <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">{title}</h2>
        {/* <ProductGrid category={category} /> */}
      </section>
    </Layout>
  )
}

export default ProductsPage
