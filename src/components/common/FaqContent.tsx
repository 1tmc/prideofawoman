import Image from "next/image"
import Count from "./Count"

import faqThumb from "@/assets/img/background/page-banner.jpg"
import faqThumb2 from "@/assets/img/background/contact.jpg"

const FaqContent = () => {
   return (
      <>
         <Image src={faqThumb} alt="Man" style={{marginBottom: 40}}/>     
         <br></br>
         <Image src={faqThumb2} alt="Man" />     
        
      </>
   )
}

export default FaqContent
