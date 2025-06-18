import Image from "next/image";
import volunteer_data from "@/data/volunteerData";
import Link from "next/link";

import volunteerShape_1 from "@/assets/img/shapes/hand-glass.png";
import volunteerShape_2 from "@/assets/img/shapes/circle-with-line-red.png";
import volunteerShape_3 from "@/assets/img/shapes/heart.png";
import volunteerShape_4 from "@/assets/img/shapes/house-heart.png";

const Volunteer = ({ style }: any) => {

   const filteredVolunteers = volunteer_data
      .filter((item) => item.page === "home_1")
      .slice(0, style ? 6 : 6);

   return (
      <div className="volunteer-area pt-120 pb-90 rel z-1">
         <div className="container container-1170">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-60">
                     <span className="section-title__subtitle mb-10">Our Team</span>
                     {style ? <h3>Meet <span>Our Team</span></h3> : <h2>Our <span>Extra</span> Ordinary Team</h2>}
                     <p>These are exceptional individuals who have given not just money but everything possible within their means to make sure that the mission and vision of this foundation sees day light.</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {filteredVolunteers.map((item) => (
                  <div key={item.id} className="col-xl-4 col-sm-6">
                     <div className={`valunteer-item ${item.item_bg}`}>
                        <div className="valunteer-item__img">
                           <Image src={item.thumb} alt="Valunteer" />
                        </div>
                        <div className="valunteer-item__designation">
                           <h5>{item.name}</h5>
                           {/* <span>Founder & Operations Manager </span> */}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         
         {style &&
            <div className="valunteet-shapres">
               <Image className="one top_image_bounce" src={volunteerShape_1} alt="Shape" />
               <Image className="two left_image_bounce" src={volunteerShape_2} alt="Shape" />
               <Image className="three right_image_bounce" src={volunteerShape_3} alt="Shape" />
               <Image className="four top_image_bounce" src={volunteerShape_4} alt="Shape" />
            </div>
         }
      </div>
   )
}

export default Volunteer
