import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"

// Static image imports
import publication1 from "@/assets/img/background/publication-cover2.jpg"
import publication2 from "@/assets/img/background/publication-cover.jpg"

const Publications = () => {
   return (
      <>
         <Head>
            <title>Publications | Christ Impact Lives Foundation (CILF)</title>
            <meta
               name="description"
               content="Explore insightful publications by Christ Impact Lives Foundation, highlighting our work in empowering single mothers and communities."
            />
            <meta
               name="keywords"
               content="CILF publications, Christ Impact Lives Foundation research, community empowerment, NGO reports, Ghana nonprofit work"
            />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Christ Impact Lives Foundation" />
            <meta property="og:title" content="Publications | Christ Impact Lives Foundation" />
            <meta
               property="og:description"
               content="Browse through the latest research, impact reports, and stories from Christ Impact Lives Foundation."
            />
            <meta property="og:image" content="/img/gallery/publication-cover.jpg" />
            <meta property="og:url" content="https://cilfafrica.org/publications" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Publications | Christ Impact Lives Foundation" />
            <meta
               name="twitter:description"
               content="Discover the written works and insights from CILF, dedicated to social impact and community transformation."
            />
            <meta name="twitter:image" content="/img/gallery/publication-cover.jpg" />
         </Head>

         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Publications" page_list="Publications" style={false} />

            <div className="project-feature-area pt-120 pb-90 rel z-1">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title text-center mb-65">
                           <span className="section-title__subtitle mb-10">Media Coverage</span>
                           <h3>
                              Featured <span>Publications</span>
                           </h3>
                        </div>
                     </div>
                  </div>

                  {/* Publication 1 */}
                  <div className="row align-items-center mb-60">
                     <div className="col-lg-6">
                        <div className="project-image">
                           <Image
                              src={publication1}
                              alt="Foundation Launch"
                              className="rounded"
                              style={{
                                 width: "100%",
                                 height: "auto",
                                 objectFit: "cover",
                                 maxHeight: "400px",
                              }}
                           />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="project-content px-3">
                           <h4>Foundation to empower women, children launched</h4>
                           <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-700">
                              <li>Launch of “The Pride of a Woman” initiative</li>
                              <li>Empowering women and children</li>
                              <li>Programs: counselling, training, outreach</li>
                           </ul>
                           <p className="mt-3 text-sm text-gray-700">
                              A new initiative titled <strong>"The Pride of a Woman"</strong> was launched to support
                              women and children through counselling, skills training, outreach, and more.
                           </p>
                           <a
                              href="https://www.graphic.com.gh/news/general-news/foundation-to-empower-women-children-launched.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              
                           >
                              Click to Read full article
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* Publication 2 */}
                  <div className="row align-items-center mb-60">
                     <div className="col-lg-6 order-lg-2">
                        <div className="project-image">
                           <Image
                              src={publication2}
                              alt="Daily Graphic Coverage"
                              className="rounded"
                              style={{
                                 width: "100%",
                                 height: "auto",
                                 objectFit: "cover",
                                 maxHeight: "400px",
                              }}
                           />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="project-content px-3">
                           <h4>CILF Featured in Daily Graphic – Page 11</h4>
                           <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-700">
                              <li>Printed media coverage</li>
                              <li>Uplifting stories of impact</li>
                              <li>Highlighting our empowerment mission</li>
                           </ul>
                           <p className="mt-3 text-sm text-gray-700">
                              Christ Impact Lives Foundation was featured in today’s edition of the Daily Graphic (Page
                              11), highlighting our mission to empower women and uplift communities.
                           </p>
                           <span className="inline-block mt-4 text-gray-500 italic text-sm">
                              Printed publication
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <FooterOne />
      </>
   )
}

export default Publications
