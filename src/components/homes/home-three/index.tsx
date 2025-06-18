import Head from "next/head";
import HeaderOne from "@/layout/headers/HeaderOne";


import Charity from "./Charity";
import About from "./About";
import OurCause from "./OurCause";
import Volunteer from "./Volunteer";
import BecomeVolunteer from "./BecomeVolunteer";
import CtaArea from "./CtaArea";
import Event from "./Event";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Features from "./Features";
import Blog from "./Blog";

const HomeThree = () => {
  return (
    <>
      <Head>
        <title>The Pride of a Woman Christian Network | Empowering and Uplifting Women Through Faith</title>
        <meta
          name="description"
          content="The Pride of a Woman Christian Network supports, equips, and empowers women spiritually, emotionally, and socially across Africa and beyond."
        />
        <meta
          name="keywords"
          content="women ministry, Christian network, empowerment, women support, African women, faith-based organization, women leadership"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="The Pride of a Woman Christian Network" />

        {/* Open Graph */}
        <meta property="og:title" content="The Pride of a Woman Christian Network" />
        <meta
          property="og:description"
          content="Join us in transforming women's lives through spiritual growth, empowerment programs, and community support initiatives."
        />
        <meta property="og:image" content="/img/gallery/pride-network-og.png" /> {/* Update to your preferred OG image */}
        <meta property="og:url" content="https://theprideofawoman.org" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Pride of a Woman Christian Network" />
        <meta
          name="twitter:description"
          content="Empowering women through faith, leadership training, and holistic support."
        />
        <meta name="twitter:image" content="/img/gallery/pride-network-og.png" />
      </Head>

      <HeaderOne style_1={false} style_2={true} />
      <main>
        <Charity />
        <About />
        <OurCause />
        <Volunteer style={true} />
        <BecomeVolunteer style={true} />
        <CtaArea />
        <Event />
        <FAQ style={false} />
        <Testimonial />
        <Features />
        <Blog />
      </main>
    </>
  );
};

export default HomeThree;
