import React, { useState } from 'react'

const Contact = () => {
  const style = {
    color:"black", margin:"5px", borderRadius: "6px", resize:"none"
  }
  const [formData, setFormData] = useState({name:'', email:'', subject:'', message:''})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
    // console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = "1nPEgDC7Hft1i-eYLMrhlzRg0W-BOVdOhbZRwJtTCjxw" //YOUR FORM ID
    // const formUrl = "https://docs.google.com/forms/d/"+ id     +"/formResponse" +`?entry.1045781291=${formData.name}&entry.2005620554=${formData.email}&entry.1065046570=${formData.subject}&entry.839337160=${formData.message}`;
    const formUrl = "https://docs.google.com/forms/d/"+ id     +"/formResponse" +`?entry.2005620554=${formData.name}&entry.1045781291=${formData.email}&entry.1065046570=${formData.subject}&entry.839337160=${formData.message}`;
    console.log(formUrl)

    const response = await fetch(formUrl, {
      method: 'POST',
     });
  }

  return (
    <div className='contact' id='contact'>
        <h1>Contact Me</h1>
        <div className="wrap">
          <div className="left col-md-6">
              <h3>
                  Get in Touch
              </h3>
              <div className="add">
                  <p>You can contact me in 1 step.</p>
                  <p>Just Fill out this form</p>
              </div>
          </div>

          <div className="right col-md-6">
            <h3>Message Me</h3>
          
            <form 
            onSubmit={handleSubmit} 
            style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}
            className="row"
            >
              <input 
              style={style}
                class="input col-md-6" 
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
              {/* <br/> */}
              <input 
              style={style}
                class="input col-md-5" 
                type="email"
                name="email" 
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
              {/* <br/> */}
              <input 
              style={style}
                class="input col-md-12" 
                type="text"
                name="subject" 
                placeholder="Subject"
                onChange={handleChange}
                value={formData.subject}
              />
              {/* <br/> */}
              <textarea
           
              style={style}
                class="input col-md-12" 
                type="text"
                
                name="message" 
                placeholder="Message"
                onChange={handleChange}
                value={formData.message}
              />
              {/* <br/> */}
              <button style={{width:'150px', color:"black", borderRadius:"10px"}} class="button" type="submit" >
                Send Message
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact