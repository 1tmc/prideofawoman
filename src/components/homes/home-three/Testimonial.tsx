import testimonial_data from "@/data/testimonialData"
import Image from "next/image"

const Testimonial = () => {
   return (
      <div className="testimonials-area-three py-120 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-30">
                     <span className="section-title__subtitle mb-10">Remember</span>
                     <h3>What Our <span>Beneficiaries Say</span></h3>
                     <p>Through the support of Christ Impact Lives Foundation, many women and children have been empowered with new skills, hope, and opportunities. </p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {testimonial_data.filter((item)=>item.page==="home_3").map((item)=>(
               <div key={item.id} className="col-xl-4 col-md-6">
                  <div className={`testimonial-item-three ${item.item_bg} `}>
                     <div className="author"><Image src={item.img || ""} alt="Author"/></div>
                     <h4 className="name">{item.name}</h4>
                     <span className="designation">{item.designation}</span>
                     <div className="text">{item.desc}</div>
                     <div className="icon"><Image src={item.quote_icon || ""} alt="Quote" /></div>
                  </div>
               </div>
               ))}
            </div>
         </div>
         <div className="testimonials-bg bgs-cover" style={{ backgroundImage: `url(assets/img/background/feature-bg.jpg)` }}>
         </div>
      </div>
   )
}

export default Testimonial
