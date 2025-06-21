import React from 'react'
import img1 from "./p1.jpeg";
import img2 from "./p2.jpeg";

import img3 from "./p3.jpeg";

import img4 from "./p4.jpeg";

import img5 from "./p5.jpeg";

import img6 from "./p6.jpeg";

import img7 from "./p7.jpeg";

import img8 from "./p8.jpeg";
import { useParams } from 'react-router-dom';
import Layout from './Layout';

function ProductDetails() {
    const {id}=useParams()
   
    console.log(id)
    const products=[
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
    
    
      ]

      const product=products.find(product=>product.id===+id)
      console.log(product)
  return (
    <Layout>
    <div>
     <img src={product.img} className='w-[400px] h-[500px] rounded-md mb-3'/>
    </div>
    </Layout>
  )
}

export default ProductDetails