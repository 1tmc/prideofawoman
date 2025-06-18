import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";
import footer_data from "@/data/footerData";

import logo_1 from "@/assets/img/logos/logo-white.png";
import donate from "@/assets/img/footer/donate-by.png";


interface ContentData {
   footer_about_text: JSX.Element;
   gallery: StaticImageData[];
}




const FooterOne = () => {
   return (
      <footer className="footer-area overlay text-white pt-120 bgs-cover" style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="widget widget_about">
                     <div className="logo_footer mb-25">
                        <Link href="/">
                           <Image src={logo_1} alt="Logo" />
                        </Link>
                     </div>
                     
                     <div className="social-style-one pt-20">
                        <SocialIcon />
                     </div>
                  </div>
               </div>

               {footer_data.filter((item) => item.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="widget widget_nav_menu">
                        <h5 className="widget-title">{item.widget_title}</h5>
                        <ul>
                           {item.footer_link.map((li, i) => (
                              <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}

            </div>
         </div>
         
         <div className="footer-bottom mt-50">
            <div className="container">
               <div className="footer-bottom__inner">
                  <div className="donate-by">
                     <span>Donate by :</span>
                     <Image src={donate} alt="Donate By" />
                  </div>
                  <div className="copyright">
                     <p>Copyright 2025 All Rights Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
