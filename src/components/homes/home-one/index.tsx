import Head from "next/head"
import HeaderOne from "@/layout/headers/HeaderOne"
import Event from "./Event"
import CtaArea from "./CtaArea"
import Blog from "./Blog"
import FooterOne from "@/layout/footers/FooterOne"
import BecomeVolunteer from "./BecomeVolunteer"
import Features from "./Features"
import BOD from "@/components/common/BOD"
import ImageSlider from "./imageSlider"
import History from "./history"
import Ceo from "./ceo"
import HeroImage from "./HeroImage"

const HomeOne = () => {
   return (
      <>
         <Head>
  <title>The Pride of A Woman Christian Network | Empowering Women Through Christ</title>
  <meta name="description" content="Welcome to the official site of The Pride of A Woman Christian Network — a faith-based community dedicated to empowering women through spiritual growth, mentorship, and skills development." />
  <meta name="keywords" content="Pride of a Woman, The Pride of a woman christian network, foundation, Christian Network, women's ministry, women empowerment, mentorship, faith-based community, spiritual development" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="The Pride of A Woman Christian Network" />
  <link rel="canonical" href="https://theprideofawomancn.com/" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="The Pride of A Woman Christian Network | Empowering Women Through Christ" />
  <meta property="og:description" content="Discover how The Pride of A Woman Christian Network uplifts women through mentorship, outreach, and spiritual empowerment." />
  <meta property="og:image" content="https://theprideofawomancn.com/img/gallery/awards.png" />
  <meta property="og:url" content="https://theprideofawomancn.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The Pride of A Woman Christian Network | Faith and Empowerment" />
  <meta name="twitter:description" content="Join a faith-driven community empowering women spiritually, emotionally, and economically through mentorship, worship, and practical support." />
  <meta name="twitter:image" content="https://theprideofawomancn.com/img/gallery/awards.png" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "The Pride of A Woman Christian Network",
        "alternateName": "Pride of A Woman",
        "url": "https://theprideofawomancn.com",
        "logo": "https://theprideofawomancn.com/public/assets/img/logos/logo.png",
        "description": "A faith-based community empowering women through mentorship, spiritual growth, outreach, and skills development.",
        "sameAs": [
          "https://www.facebook.com/Pride-of-a-Woman-Christian-Network/100070074466632",
          "https://www.instagram.com/theprideofawomanfoundation"
        ],
        "founder": {
          "@type": "Person",
          "name": "Abigail Kyeremeh"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GH"
        }
      }
    `}
  </script>
</Head>


         <HeaderOne style_1={false} style_2={false} />
         <main>
         <HeroImage />
            <History />
            <ImageSlider />
            <Ceo />
            <Event />
            <Features />
            <BecomeVolunteer />
            <BOD />
            <Blog style={false} />
            <CtaArea />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeOne
