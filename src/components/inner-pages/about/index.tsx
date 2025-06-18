import Head from "next/head"
import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import About from "@/components/homes/home-one/About"
import BOD from "@/components/common/BOD"
import CtaArea from "@/components/homes/home-three/CtaArea"


const InnerAbout = () => {
   return (
      <>
         <Head>
            <title>About Us | The Pride of a Woman Christian Network</title>
            <meta name="description" content="Learn about The Pride of a Woman Christian Network—our mission, vision, and commitment to empowering Christian women through faith, leadership, and community support." />
            <meta name="keywords" content="Christian women network, faith-based women support, Christian mentorship, women empowerment Africa" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="The Pride of a Woman Christian Network" />

            {/* Open Graph */}
            <meta property="og:title" content="About Us | The Pride of a Woman Christian Network" />
            <meta property="og:description" content="We are a Christian women’s network fostering empowerment, healing, and transformation through faith." />
            <meta property="og:image" content="/img/gallery/awards.png" />
            <meta property="og:url" content="https://yourdomain.org/about" />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="About The Pride of a Woman Christian Network" />
            <meta name="twitter:description" content="Explore the vision, mission, and impact of our Christian women’s empowerment network." />
            <meta name="twitter:image" content="/img/gallery/awards.png" />
         </Head>

         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="About Us" page_list="About" style={false} />
            <About />
            <BOD />
            <CtaArea />
         </main>
         <FooterOne />
      </>
   )
}

export default InnerAbout
