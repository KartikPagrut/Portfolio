import React from 'react'
import terminal from "../public/assets/terminal.png"
import { useRef } from 'react'
import { useState } from 'react'
import arrowup from "../public/assets/arrow-up.png"
import emailjs from "@emailjs/browser"

const Contact = () => {

     const [loading, setloading] = useState(false)
    const formref = useRef();
    const [form, setform] = useState({
        name:"",
        email:"",
        message:"",
    })

    const handlechange = (e) => {
  const { name, value } = e.target;
  setform((prev) => ({
    ...prev,
    [name]: value,
  }));
};

    
    const handlesubmit=async(e)=>{
         e.preventDefault();
         setloading(true)

         try{

             emailjs.send("service_jnzx8qm","template_eukpccu",{
                from_name:form.name,
                to_name:"kartik",
                from_email:form.email,
                to_email:"pagrutkartik2@gmail.com",
                message:form.message
             },"OE0TWZrNbPzqVVECX") //public key
             setloading(false)
             alert("your message has been sent")
             setform({
                name:"",
                email:"",
                message:""
             })
         }

         catch(error){
            setloading(false)
            console.log(error)
            alert("something went wrong")


         }




    }

  return (
   <>
   <section className='c-space my-20' id='contact'>
    <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src={terminal} alt="terminal" className='absolute inset-0 min-h-screen' />
        
        <div className='contact-container '>
            <h3 className='head-text '>Let's talk</h3>
            <p className='text-lg text-white-600 mt-3'>
                Whether you' re looking to build a new website improve you excisting platform , or bring a unique project to life, I'm here to help.  
            </p>
            {/* //for */}
            <form ref={formref} onSubmit={handlesubmit} className='mt-12 flex flex-col space-y-7'>
                <label htmlFor="" className='space-y-3'>
                    <span className='field-label'>Full Name</span>
                    <input type="text" className='field-input' required name='name'value={form.name} onChange={handlechange}/>
                </label>

                <label htmlFor="" className='space-y-3'>
                    <span className='field-label'>Email</span>
                    <input type="text" className='field-input' required name='email' value={form.email} onChange={handlechange}/>
                </label>

                <label htmlFor="" className='space-y-3'>
                    <span className='field-label'>Your Message</span>
                    <textarea type="text" className='field-input' required name='message'value={form.message} placeholder="Hi, I'm intrested in coding" onChange={handlechange}/>
                </label>

                <button className='field-btn' type='submit' disabled={loading}>
                    {loading ? "sending....":"send message"}
                    <img src={arrowup} alt="" className='field-btn_arrow'/>
                </button>


            </form>

        </div>
    </div>



   
   </section>
   
   </>
  )
}

export default Contact
