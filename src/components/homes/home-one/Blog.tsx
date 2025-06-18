import blog_data from "@/data/blogData"
import Image from "next/image"
import Link from "next/link"

import blogShape_1 from "@/assets/img/shapes/three-round-yellow.png"

const HomeOneBlog = ({ style }: any) => {
   return (
      <div className={`pt-30 pb-90 rel z-1 ${style ? "blog-area-two overlay" : "blog-area"}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-x col-lg-8 col-md-10">
                  <div className={`section-title text-center ${style ? "text-white mb-55" : "mb-60"}`}>
                     <span className="section-title__subtitle mb-10">From Our Network</span>
                     <h2>Faith, Growth & <span>Inspiring Stories</span></h2>
                     <p>Stay connected with powerful testimonies, community impact stories, and spiritual messages that uplift and transform lives.</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {!style && blog_data.filter((item) => item.page === "home_1").map((item, index) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className="blog-item">
                        <div className="blog-item__img">
                           <Image src={item.thumb} alt="Blog" />
                           <div className="post-date">
                              <b>{["06", "03", "01"][index]}</b>
                              <span>{["Jun", "May", "Apr"][index]}</span>
                           </div>
                        </div>
                        <div className="blog-item__content">
                           <ul className="blog-meta">
                              <li><i className="flaticon-user"></i> <Link href="#">{["Mrs. Esther Aboagye", "Sarah Ofori-Atta", "Deaconess Lydia Addai"][index]}</Link></li>
                              <li><i className="flaticon-bubble-chat"></i> <Link href="#">05 Comments</Link></li>
                           </ul>
                           <h4><Link href="/blog">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link href="/blog" className="read-more">Read More</Link>
                        </div>
                     </div>
                  </div>
               ))}

               {style && blog_data.filter((item) => item.page === "home_2").map((item, index) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className={`blog-item blog-item--two ${item.item_bg}`}>
                        <div className="blog-item__img">
                           <Image src={item.thumb} alt="Blog" />
                        </div>
                        <div className="blog-item__content">
                           <div className="post-date-two">
                              <b>{["12", "10", "07"][index]}</b>
                              <span>{["Jun", "May", "Apr"][index]}</span>
                           </div>
                           <ul className="blog-meta">
                              <li><i className="flaticon-user"></i> <a href="#">{["Lady Pastor Victoria Mensah", "Mother Charity Owusu", "Sis. Rose Okyere"][index]}</a></li>
                              <li><i className="flaticon-bubble-chat"></i> <a href="#">05 Comments</a></li>
                           </ul>
                           <h4><Link href="/blog">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link href="/blog" className="read-more">Read More</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {!style && <Image className="blog-shape-one top_image_bounce" src={blogShape_1} alt="Shape" />}
      </div>
   )
}

export default HomeOneBlog
