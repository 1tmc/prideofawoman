"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"

import videoBg from "@/assets/img/valunteer/valunteer1.jpg"
import leafShape from "@/assets/img/shapes/three-round-green.png"

const tab_title: string[] = ["Mission", "Vision", "Slogan",]

const tab_content: JSX.Element[] = [
   (<>Our mission is to empower single mothers by providing them with professional skills, financial support, and entrepreneurial guidance. We strive to create sustainable opportunities that foster independence, economic stability, and a brighter future for them and their children.</>),
   (<>We strive to create a global community where single mothers are not limited by circumstances but are empowered through education, financial aid, and mentorship to unlock their full potential and lead fulfilling, self-sustained lives.</>),
   (<>Breaking Barriers; Transforming Lives; Building Legacies!! </>),
]

const Ceo = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <>
         <div className="why-choose-area overlay py-120">
            <div className="container">
               <div className="row gap-100 align-items-center">
                  <div className="col-lg-6">
                     <div className="why-choose-content text-white rmb-65">
                        <div className="section-title mb-60">
                           <span className="section-title__subtitle mb-10">Profile</span>
                           <h2>Meet The <span>Founder</span></h2>
                        </div>
                        <p>Abigail Kyeremeh is a devoted Ghanaian Christian leader, visionary, and the founder of The Pride of A Woman Christian Network. With a heart for ministry and a passion for empowering women, Abigail has dedicated her life to uplifting others through faith, mentorship, and community development.
                        Her journey began with a clear calling to support women—spiritually, emotionally, and economically—through Christ-centered initiatives. This calling gave birth to what is now a growing network of women across communities, united by purpose and strengthened by shared values. Under her leadership, the organization has evolved into a safe space for women to discover their identity in Christ, build meaningful relationships, and develop practical life skills.
                        <br></br>
                        Abigail’s work extends beyond church walls. Through outreach programs, empowerment workshops, and counseling, she has impacted the lives of countless women and families. Her teachings are deeply rooted in biblical truth, and her leadership is marked by compassion, integrity, and bold faith.
                        She continues to serve as a spiritual guide, mentor, and advocate, inspiring a generation of women to walk in purpose and transform their communities through Christ.
                        </p>
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <div className="about-image-part">
                        <div >
                           <Image src={videoBg} alt="Video" 
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
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default Ceo
