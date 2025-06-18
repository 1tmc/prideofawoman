"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import HeaderSearch from "./Menu/HeaderSearch"
import HeaderTop from "./Menu/HeaderTop"
import UseSticky from "@/hooks/UseSticky"
// import HeaderTop from "./Menu/HeaderTop"
import "@/assets/css/style.css";


import HeaderLogo_1 from "@/assets/img/logos/logo.png";
import HeaderLogo_2 from "@/assets/img/logos/logo-white.png";

const HeaderOne = ({ style_1, style_2 }: any) => {
   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };


   return (
      <>
         <HeaderTop />
         {/* {style_1 ? <HeaderTop style={true} /> : <HeaderTop style={false} />} */}
         <nav className={`navbar navbar-area navbar-expand-lg fixed top-0 left-0 w-full z-50 ${style_1 ? "navbar--two" : "py-2 navbar--one"} ${style_2 ? "navbar--three" : ""} ${sticky ? "sticky-active" : ""}`}>
            <div className="container nav-container navbar-bg">
               <div className="responsive-mobile-menu">
                  <button
                     onClick={toggleMobileMenu}
                     className={`menu toggle-btn d-block d-lg-none ${isActive ? "open" : ""}`}
                     data-target="#Iitechie_main_menu"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="icon-left"></span>
                     <span className="icon-right"></span>
                  </button>
               </div>
               <div className="logo">
                  <Link href="/"><Image 
                  src={style_2 ? HeaderLogo_2 : HeaderLogo_1} alt="logo"/></Link>
               </div>
               <div className="nav-right-part nav-right-part-mobile">
                  <a style={{ cursor: "pointer" }} className="search-bar-btn">
                     <i onClick={() => setIsSearch(true)} className="flaticon-magnifying-glass"></i>
                  </a>
               </div>
               <div className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`} id="Iitechie_main_menu">
                  <NavMenu />
               </div>
               <div className="nav-right-part nav-right-part-desktop">
                  <a style={{ cursor: "pointer" }} className="search-bar-btn">
                     <i onClick={() => setIsSearch(true)} className="flaticon-magnifying-glass"></i>
                  </a>
                  <div className="dropdown">
                     {/* <Link className="dropdown-toggle" href="#">
                        <i className="flaticon-user-1"></i>
                     </Link> */}
                  </div>
                  <Link className="cr-btn btn--style-two" href="/donate">SUPPORT US</Link>
               </div>
            </div>
         </nav>
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderOne
