import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import CauseArea from "./CauseArea"
import CTA from  "../../homes/home-one/CtaArea"


const Causes = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Projects" page_list="Projects" style={false} />
            <CauseArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Causes
