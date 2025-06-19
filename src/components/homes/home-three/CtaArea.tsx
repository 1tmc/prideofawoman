import Link from "next/link"

const CtaArea = () => {
  return (
   <div className="cta-area overlay bgs-cover pt-110 rpt-120 pb-120" style={{backgroundImage:`url(/assets/img/background/cta-three.jpg)`}}>
       <div className="container container-1170">
           <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                   <div className="section-title text-center text-white">
                       <h2>CHRIST IMPACT LIVES <span>FOUNDATION</span></h2>
                       <p>Breaking Barriers; Transforming Lives; Building Legacies!!</p>
                       <p>-We Partner With Men-</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
  )
}

export default CtaArea
