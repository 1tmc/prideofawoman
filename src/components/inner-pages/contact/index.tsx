import Head from "next/head";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import ContactArea from "./ContactArea";
import ContactInfo from "./ContactInfo";
import LocationMap from "./LocationMap";


const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | The Pride of a Woman Christian Network</title>
        <meta
          name="description"
          content="Get in touch with The Pride of a Woman Christian Network for inquiries, support, and community connections empowering women in faith."
        />
        <meta
          name="keywords"
          content="Contact Pride of a Woman, Christian women network, women empowerment Ghana, faith community, support women"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="The Pride of a Woman Christian Network" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | The Pride of a Woman Christian Network" />
        <meta
          property="og:description"
          content="Reach out to The Pride of a Woman Christian Network for inquiries, support or to join our community."
        />
        <meta property="og:image" content="/img/gallery/pride-woman-logo.png" /> {/* change this to actual logo/image path */}
        <meta property="og:url" content="https://prideofawoman.org/contact" /> {/* replace with actual URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact The Pride of a Woman Christian Network" />
        <meta
          name="twitter:description"
          content="Contact The Pride of a Woman Christian Network to learn more or join our faith community empowering women."
        />
        <meta name="twitter:image" content="/img/gallery/pride-woman-logo.png" /> {/* same here */}
      </Head>

      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb page_title="Contact Us" page_list="Contact" style={false} />
        <ContactArea />
        <ContactInfo />
        <LocationMap />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;
