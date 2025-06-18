'use client'
import { useState } from 'react';

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
   });

   // Handle form data change
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value
      }));
   };

   // Handle form submission
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      // Construct the mailto link with recipient email
      const mailtoLink = `mailto:prideofawoman2016@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}`;

      // Open the default email client with the pre-filled details
      window.location.href = mailtoLink;
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="row">
            <div className="col-xl-9 mb-10">
               <p>Do you want to join the team, Support us or you have a question? <br></br>Contact Us Now:</p>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     className="form-control"
                     placeholder="Your Name"
                     required
                  />
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     className="form-control"
                     placeholder="Email Address"
                     required
                  />
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                     type="text"
                     id="phone_number"
                     name="phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                     className="form-control"
                     placeholder="Phone Number"
                  />
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                     name="message"
                     id="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     className="form-control"
                     rows={2}
                     placeholder="Write Your Message"
                     required
                  ></textarea>
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group pt-10 mb-0">
                  <button type="submit" className="cr-btn ml-5">Send us a message</button>
               </div>
            </div>
         </div>
      </form>
   );
}

export default ContactForm;
