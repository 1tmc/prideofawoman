"use client";

import Head from "next/head";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import GalleryArea from "../../gallery/galleryArea"; // adjust path if necessary

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Gallery | Christ Impact Lives Foundation (CILF)</title>
        <meta
          name="description"
          content="Explore photos from past events, projects, and community engagements by Christ Impact Lives Foundation."
        />
        <meta
          name="keywords"
          content="CILF gallery, Christ Impact Lives Foundation events, NGO project images, community work photos"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Christ Impact Lives Foundation" />

        {/* Open Graph */}
        <meta property="og:title" content="Gallery | Christ Impact Lives Foundation" />
        <meta
          property="og:description"
          content="Take a visual journey through CILF’s impact. See photos from our community initiatives and outreach programs."
        />
        <meta property="og:image" content="/img/gallery/awards.png" />
        <meta property="og:url" content="https://cilfafrica.org/gallery" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Christ Impact Lives Foundation" />
        <meta
          name="twitter:description"
          content="A visual showcase of our work empowering communities and supporting single mothers."
        />
        <meta name="twitter:image" content="/img/gallery/awards.png" />
      </Head>

      <HeaderOne style_1={false} style_2={false} />

      <main>
        <Breadcrumb page_title="Our Gallery" page_list="Gallery" style={false} />
        <GalleryArea />
      </main>

      <FooterOne />
    </>
  );
};

export default Portfolio;
