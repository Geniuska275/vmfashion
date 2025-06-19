

// import CategoryCircles from "./components/CategoryCircles"
// import ProductGrid from "./components/ProductGrid"
// import Filters from "./components/Filters"
// import ProductListing from "./components/ProductListing"
// import Footer from "./components/Footer"

// import { PiChats } from "react-icons/pi";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Chat from "./components/Chat"
// import Header from "./components/Header"
// import Homepage from "./pages/Homepage"
// import SareeCollection from "./pages/Saree"
// import LehengaCholiCollection from "./pages/Lehega"
// import IndoWestern from "./pages/IndoWestern"
// import Plus from "./pages/PlusSize"
// import Women from "./pages/women"
// import Men from "./pages/Men"
// import Kids from "./pages/Kids"
// import Jewellery from "./pages/Jewellery"
// import ChatBubble from "./components/ChatBubble"
// import Bridal from "./pages/Bridal"
// import ProductDetailPage from "./pages/ProductDetailsPage"
// import WomenDetailPage from "./pages/WomenDetailsPage"
// import KidsDetailPage from "./pages/KidsDetailsPage"
// import JewelleryDetailPage from "./pages/JewelleryDetailsPage"
// import Salwar from "./pages/Salwar"




// function App() {
//   // const [sortBy] = useState("Trending")

//   return (
//   <div className="flex justify-center items-center">
//       <div className=''>
//       <img src={website} className="w-[300px] h-[400px] md:ml-[100px] mt-5" />
//       <h1 className='text-3xl text-center mt-5'>We are building a fantastic website for you all,Stay tuned.</h1>
//       <h2 className='text-2xl text-center'>We are under construction and we will be up in few days.</h2>

//     </div>
//       <div className="absolute right-3 bottom-2 flex justify-center items-center rounded w-[40px] h-[40px] bg-[#a22c47]">
//         <PiChats />
//       </div>
//   </div>
//   )
// }

// export default  App

// function App() {
   

//   return (
//     <Router>

//     <div className="min-h-screen bg-white">
//       {/* <h1 className="bg-black py-2 text-center text-white text-yellow-400">Customised Product,Whatsapp +157890004484</h1> */}
//          <Header/>
//          <Routes>
//           <Route path="/" element={<Homepage/>}/>
//           <Route path="/womens/sarees" element={<SareeCollection/>}/>
//           <Route path='/lehenga-choli' element={<LehengaCholiCollection/>}/>
//           <Route path='/womens/indowestern' element={<IndoWestern/>}/>
//           <Route path='/plus-size-dresses' element={<Plus/>}/>
//           <Route path='/women' element={<Women/>}/>
//            <Route path='/men' element={<Men/>}/>
//            <Route path='/kids' element={<Kids/>}/>
//            <Route path='/jewellery' element={<Jewellery/>}/>
//            <Route path='/bridal-dresses' element={<Bridal/>}/>
//            <Route path='/womens/salwar-kameez' element={<Salwar/>}/>

//            <Route path='/product/:id' element={<ProductDetailPage/>}/>
           
//            <Route path='/kids-product/:id' element={<KidsDetailPage/>}/>
//            <Route path='/women-product/:id' element={<WomenDetailPage/>}/>
//            <Route path='/jewellery-product/:id' element={<JewelleryDetailPage/>}/>



           



           








        

//          </Routes>
//         <ChatBubble/>
//         <Footer/>
//    </div>
//     </Router>)

// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./black/HomePage"
import AboutPage from "./black/AboutPage"
import ProductsPage from "./black/ProductsPage"
import ContactPage from "./black/ContactPage"
import NotFoundPage from "./black/NotFoundPage"
import Lehenga from "./black/lehenga"
import Drape from "./black/Drapes"
import Anarkalis from "./black/Anarkailis"
import Sararis from "./black/Sararis"
import Made from "./black/Made"
import ProductDetails from "./black/ProductDetails"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/made-to-measure" element={<Made/>} />
        <Route path="/products/lehengas" element={<Lehenga/>} />
        <Route path="/products/anarkalis" element={<Anarkalis />} />
        <Route path="/products/sararas" element={<Sararis/>} />
        <Route path="/products/drapes" element={<Drape/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/terms" element={<AboutPage section="terms" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
