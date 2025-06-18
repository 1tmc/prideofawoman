import Link from "next/link"

const HeroArea = () => {
   return (
      <div className="hero-area bgs-cover overlay pt-155 pb-170" style={{backgroundImage:`url(/assets/img/hero/hero.png)`}}>
         <div className="container container-1370">
            <div className="hero-content text-center text-white">
               <h1>Breaking Barriers, Transforming Lives, <span> Building Legacies!</span></h1>
               <p>Empowering single mothers and their children with skills, support, and opportunities to transform lives, break barriers, and build lasting legacies.</p>
               {/* <div className="hero-btns pt-30 rpt-10">
                  <Link className="cr-btn" href="/causes">Our Programs</Link>
                  <Link className="cr-btn btn--yellow btn--style-two" href="/contact">Contact us</Link>
               </div> */}
            </div>
         </div>
      </div>
   )
}

export default HeroArea
