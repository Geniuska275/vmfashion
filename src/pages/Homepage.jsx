import React from 'react'
import CategoryCircles from '../components/CategoryCircles'
import ProductListing from '../components/ProductListing'

function Homepage() {
  return (
    <div>
        
              {/* Breadcrumb */}
              <div className="container mx-auto px-4 py-4">
               <div className="flex items-center text-sm">
                  <a href="/" className="text-gray-600">
                    VM Fashion  </a>           <span className="mx-2">→</span>
                   <span className="font-medium">Women Ethnic Dresses</span>
                 </div>
               </div>
               {/* Category Circles */}     
                <CategoryCircles />
        
               {/* <ProductGrid/> */}
              <ProductListing/>
    </div>
  )
}

export default Homepage