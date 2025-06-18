import Head from "next/head"
import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Volunteer from "@/components/homes/home-one/Volunteer"
import VolunteerThree from "@/components/homes/home-three/Volunteer"

const Volunteers = () => {
   return (
      <>
         <Head>
            <title>Our Volunteers | Christ Impact Lives Foundation (CILF)</title>
            <meta
               name="description"
               content="Meet the dedicated volunteers at Christ Impact Lives Foundation who contribute their time and effort to empower single mothers and communities."
            />
            <meta
               name="keywords"
               content="CILF volunteers, Christ Impact Lives Foundation team, NGO support, community helpers, volunteer Ghana"
            />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Christ Impact Lives Foundation" />

            {/* Open Graph */}
            <meta property="og:title" content="Our Volunteers | Christ Impact Lives Foundation" />
            <meta
               property="og:description"
               content="Explore the amazing team of volunteers making an impact through Christ Impact Lives Foundation."
            />
            <meta property="og:image" content="/img/gallery/awards.png" />
            <meta property="og:url" content="https://cilfafrica.org/volunteers" />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Our Volunteers | Christ Impact Lives Foundation" />
            <meta
               name="twitter:description"
               content="Learn about the individuals helping make a difference through Christ Impact Lives Foundation's volunteer programs."
            />
            <meta name="twitter:image" content="/img/gallery/awards.png" />
         </Head>

         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Volunteers" page_list="Volunteers" style={false} />
            <Volunteer style={false} />
            <VolunteerThree style={false} />
         </main>
         <FooterOne />
      </>
   )
}

export default Volunteers;
