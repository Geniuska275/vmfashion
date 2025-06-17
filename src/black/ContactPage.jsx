

import { useRef,useState } from "react";
import MapComponent from "./google"
import Layout from "./Layout"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactPage() {
  const [name,setName]=useState("")
  

  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")

  console.log(name,email,message)



   const templateParams={
    from_name:name,
    from_email:email,
    to_name:"Vm Fashion",
    subject:"Contact Vm Fashion",
    message:message,

  }
  
  const sendEmail = (e) => {
    const public_key="LP_gdQVqVkKCNgmIL"
    e.preventDefault();

    emailjs
      .send('service_zvdl20p', 'template_fva1ypj', 
        templateParams,
      ""
      )
      .then(
        () => {
          toast.success("Email Sent to Vm Fashion")
          setName(" ")
          setEmail(" ")
          setMessage(" ")
         
        },

        (error) => {
          toast.error("Email Not Sent to Vm Fashion")
          console.log('FAILED...', error);
        },
      );
  };
  return (
    <Layout>
      <ToastContainer />
      <section className="w-full">
        <h2 className="font-playfair text-2xl md:text-xl lg:text-xl font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-playfair mb-4">Address:</h3>
            <p className="mb-4">
              VM Fashion<br/>
131a Ealing Rd,<br></br>
Wembley,<br/>
London
HA0 4BP
            </p>
            <p className="mb-4">
              Email:vmfashionuk@gmail.com<br/>
              Phone: 020 8900 1353<br></br>
            </p>
              <h2>Opening Hours</h2>
             <p className="mb-4">
              Monday - Saturday: 9:30 - 19:30<br/>
             Sunday: 11:00 - 17:00<br/>
             Bank Holidays:opening time varies ,check with store.<br/>
            </p>
           <MapComponent/>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-black border border-amber-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-black border border-amber-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-black border border-amber-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              ></textarea>
            </div>
            <button
              onClick={sendEmail}
              type="submit"
              className="px-6 py-2 bg-amber-300 text-black font-medium rounded-md hover:bg-amber-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
