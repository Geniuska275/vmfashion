

import { useState, useEffect } from "react"
// import placeholderImage from "../assets/placeholder.jpg"
import img1 from "./p1.jpeg";
import img2 from "./p2.jpeg";

import img3 from "./p3.jpeg";

import img4 from "./p4.jpeg";

import img5 from "./p5.jpeg";

import img6 from "./p6.jpeg";

import img7 from "./p7.jpeg";

import img8 from "./p8.jpeg";
import { Link } from "react-router-dom";



function ProductGrid({ category }) {
  const [products, setProducts] = useState([
    {
      id:1,
      img:img1,
    },
      {
      id:2,
      img:img2,
    },
      {
      id:3,
      img:img3,
    },
      {
      id:4,
      img:img4,
    },
      {
      id:5,
      img:img5,
    },
      {
      id:6,
      img:img6,
    },
      {
      id:7,
      img:img7,
    },
      {
      id:8,
      img:img8,
    },


  ])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) =>(
          
        <Link to={`/product/${product.id}`}>

       <div key={product.id} className=" p-4 rounded-lg shadow-md">
          <img
            src={product.img}
            
            className="w-full h-48 object-cover mb-4 rounded"
            />
         
        </div>
            </Link>
      )
      )}
     
    </div>
  )
}

export default ProductGrid
