import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import EventArea from "./EventArea"
import BecomeVolunteer from "@/components/homes/home-one/BecomeVolunteer"


const Event = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Upcoming Events" page_list="Event" style={false} />
            <EventArea />

         </main>
         <FooterOne />
      </>
   )
}

export default Event;
