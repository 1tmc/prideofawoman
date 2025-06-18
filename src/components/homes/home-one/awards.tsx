import Image from "next/image"
import Link from "next/link"

import aboutImg_1 from "@/assets/img/gallery/awards.png"

const Awards = () => {
   return (
      <div className="about-area py-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 text-center mb-4">
                  <h2 className="fw-bold">Some of Our <span className="text-warning">Awards</span></h2>
               </div>
               <div className="col-lg-8 d-flex justify-content-center">
                  <div className="about-image-part text-center">
                     <Image 
                        src={aboutImg_1} 
                        alt="Awards" 
                        width={700}
                        height={400}
                        className="rounded"
                        style={{ objectFit: "contain" }} // No cropping
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Awards;
