import Link from "next/link"

const CommonSocialIcon = () => {
   return (
      <>
         <Link href="https://web.facebook.com/people/Pride-of-a-Woman-Christian-Network/100070074466632/?_rdc=1&_rdr">
            <i className="fab fa-facebook-f"></i>
         </Link>
         <Link href="https://www.instagram.com/theprideofawomanfoundation?igsh=dWVseWN0dTZoNG9m" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
         </Link>
         <Link href="https://www.tiktok.com/@theprideofawoman" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
         </Link>
      </>
   )
}

export default CommonSocialIcon
