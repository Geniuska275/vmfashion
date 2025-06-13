import { Link } from "react-router-dom"
import Layout from "./Layout"

function NotFoundPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">404</h2>
        <p className="text-xl mb-8">Page not found</p>
        <Link
          to="/"
          className="px-6 py-2 bg-amber-300 text-black font-medium rounded-md hover:bg-amber-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
