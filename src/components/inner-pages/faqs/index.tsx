import Head from "next/head";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import FAQ from "@/components/homes/home-one/FAQ";
import ChooseArea from "@/components/homes/home-one/ChooseArea";

const Faqs = () => {
  return (
    <>
      <Head>
        <title>FAQs | The Pride of a Woman Christian Network</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about The Pride of a Woman Christian Network, our mission, community activities, and how to get involved."
        />
        <meta
          name="keywords"
          content="Pride of a Woman FAQs, Christian women support, women empowerment, Ghana, faith community, how to join Pride of a Woman"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="The Pride of a Woman Christian Network" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQs | The Pride of a Woman Christian Network" />
        <meta
          property="og:description"
          content="Got questions about The Pride of a Woman Christian Network? Explore our FAQ section for quick answers and insights."
        />
        <meta property="og:image" content="/img/gallery/pride-woman-logo.png" /> {/* Update path if needed */}
        <meta property="og:url" content="https://prideofawoman.org/faqs" /> {/* Update with actual URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs | The Pride of a Woman Christian Network" />
        <meta
          name="twitter:description"
          content="Discover more about The Pride of a Woman Christian Network through our frequently asked questions section."
        />
        <meta name="twitter:image" content="/img/gallery/pride-woman-logo.png" /> {/* Update if needed */}
      </Head>

      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Frequently Asked Questions"
          page_list="Faq"
          style={true}
        />
        <FAQ />
      </main>
      <FooterOne />
    </>
  );
};

export default Faqs;
