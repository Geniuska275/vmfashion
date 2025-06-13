import Layout from "./Layout"
import ProductGrid from "./ProductGrid"

function HomePage() {
  return (
    <Layout>
      <section className="w-full">
        <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Product Catalogue</h2>
        <ProductGrid />
      </section>
    </Layout>
  )
}

export default HomePage
