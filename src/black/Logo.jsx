import { Link } from "react-router-dom"
import image from "./vm.jpeg"

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-4 mb-6 md:mb-0">
      <div className="relative w-24 h-24">
         <img src={image} alt="VM Fashion Logo" className="object-contain w-full h-full" />
      </div>
      <h1 className="md:ml-5 font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
        VM Fashion <span className="font-normal">(JABEEN&apos;S)</span>
      </h1>
    </Link>
  )
}

export default Logo
