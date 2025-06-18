"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"

import videoBg from "@/assets/img/video/video-bg.jpg"
import leafShape from "@/assets/img/shapes/three-round-green.png"

const tab_title: string[] = ["Mission", "Vision", "Slogan",]

const tab_content: JSX.Element[] = [
   (<>Our mission is to empower single mothers by providing them with professional skills, financial support, and entrepreneurial guidance. We strive to create sustainable opportunities that foster independence, economic stability, and a brighter future for them and their children.</>),
   (<>We strive to create a global community where single mothers are not limited by circumstances but are empowered through education, financial aid, and mentorship to unlock their full potential and lead fulfilling, self-sustained lives.</>),
   (<>Breaking Barriers; Transforming Lives; Building Legacies!! </>),
]

const ChooseArea = () => {

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
                           <span className="section-title__subtitle mb-10">Why Choose Us</span>
                           <h2>Trusted Foundation in <span>Ghana</span></h2>
                        </div>

                        <div className="vission-mission-tab">
                           <ul className="nav mb-25" role="tablist">
                              {tab_title.map((tab, index) => (
                                 <li key={index} className="nav-item">
                                    <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                                       {tab}
                                    </button>
                                 </li>
                              ))}
                           </ul>

                           <div className="tab-content">
                              {tab_content.map((content, index) => (
                                 <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}  >
                                    {content}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <div className="why-choose-video">
                        <div className="video rel">
                           <Image src={videoBg} alt="Video" />
                           
                        </div>
                        <Image className="leaf-shape top_image_bounce" src={leafShape} alt="Shape" />
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

export default ChooseArea
