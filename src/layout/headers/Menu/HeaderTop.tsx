import Link from 'next/link'

const HeaderTop = ({ style }: any) => {
   return (
      <div className={`navbar-top <HeroImage /> ${style ? "pt-30 rpt-10 navtop--two" : "pt-15 pb-10 bgc-black navtop--one"}`}>
         <div className="container">
            <div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
               <ul className="topbar-left">
                  {style ?
                     <>
                        <li><b>Call now: <Link href="callto:+233547042415">+233-547-042-415</Link></b></li>
                        <li>Shiloh, Hawaii 81063</li>
                     </> :
                     <>
                        <li>The Pride Of A Woman Christian Network ! </li>
                        <li><i className="flaticon-pin"></i> Accra, Ghana</li>
                        <li><b>Call now - <Link href="callto:+233554407327">+233-554-4073-27</Link></b></li>
                     </>
                  }
               </ul>
               <ul className="topbar-right">
                  <li className="social-area">
                     <span>Follow Us - </span>
                     <Link href="https://web.facebook.com/people/Pride-of-a-Woman-Christian-Network/100070074466632/?_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></Link>
                     <Link href="https://www.instagram.com/theprideofawomanfoundation?igsh=dWVseWN0dTZoNG9m" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
                     <Link href="https://www.linkedin.com/in/christ-impact-lives-foundation-700337355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-tiktok"></i></Link>
                  </li>
               </ul>

            </div>
         </div>
      </div>
   )
}

export default HeaderTop
