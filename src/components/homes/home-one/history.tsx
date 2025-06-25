import Image from "next/image"
import Link from "next/link"
import counter_data from "@/data/counterData"
import Count from "@/components/common/Count"

import aboutImg_1 from "@/assets/img/about/about4.jpg"
import aboutImg_2 from "@/assets/img/about/about2.jpg"
import aboutImg_3 from "@/assets/img/about/about3.jpg"

const History = () => {
   return (
      <div className="about-area py-120">
         <div className="container">
            <div className="row align-items-center">
               
               <div className="col-lg-6">
                  <div className="about-content-part rmt-65">
                     <div className="section-title mb-60">
                        <span className="section-title__subtitle mb-10">Our History</span>
                        <h2>The Story behind <span>The Pride of A Woman</span></h2>
                     </div>
                     <p>The Pride of A Woman Christian Network is a dynamic, faith-based community committed to empowering women through spiritual development, mentorship, and practical skills training. Guided by strong Christian values, we provide a nurturing environment where women are encouraged to connect, grow, and transform their lives.
                     Our mission is to improve the social and economic well-being of women and children through counseling, educational workshops, outreach programs, and holistic empowerment initiatives. By cultivating faith, wisdom, and community support, we equip women to thrive—spiritually, emotionally, and economically.
                     Together, we’re building a generation of women who walk boldly in purpose, uplift others, and lead with faith.</p>
                     <Link className="cr-btn ml-5 mt-25" href="/about">About Us</Link>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about-image-part">
                     <div className="row">
                        <div>
                           <div >
                              <Image src={aboutImg_1} alt="About" 
                              style={{
                                 "maxWidth": 500, 
                                 "height":400, 
                                 "borderRadius":30,
                                 "marginLeft": 20
                              }}
                              />
                           </div>
                           
                        </div>
                        
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
      
   )
}

export default History;
