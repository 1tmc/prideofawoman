"use client"
import event_data from "@/data/EventData";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import f1Img from "@/assets/img/gallery/f1.png";


const EventArea = () => {
   return (
      <div className="our-event-area pt-120 pb-95 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-65">
                     <span className="section-title__subtitle mb-10">Our Event</span>
                     <h3>Our <span>Upcoming Events</span></h3>
                     <p>We are in the year 2025, the foundation has Three(3) upcoming events. One happening in East Africa- Kenya and Two happening in Ghana.</p>
                  </div>
               </div>
            </div>

            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1200: 3 }}>
               <Masonry columnsCount={3} gutter="30px" className=" events-active">
                  {event_data.filter((item) => item.page === "home_1").map((item) => (
                     <div key={item.id} className="event-item">
                        <Image src={item.thumb} alt="Event" />
                        <div className="event-item__hover">
                           <h4><Link href="/events">{item.title}</Link></h4>
                           <ul>
                              <li><i className="flaticon-time"></i> <span>{item.date}</span></li>
                              <li><i className="flaticon-map"></i> <span>{item.city}</span></li>
                           </ul>
                        </div>
                     </div>
                  ))}
               </Masonry>
            </ResponsiveMasonry>
         </div>

             
      </div>
   )
}

export default EventArea;
