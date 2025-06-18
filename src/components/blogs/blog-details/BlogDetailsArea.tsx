import Image from "next/image"
import Link from "next/link";
import CommonSocialIcon from "@/components/common/SocialIcon";
import BlogDetailsForm from "@/components/forms/BlogDetailsForm";

interface BlogDetailsProps {
   single_blog: {
      thumb: any;
      date: number;
      title: string;
      content: string;
      desc?: string;
      tags?: string[];
   };
}

const BlogDetailsArea = ({ single_blog }: BlogDetailsProps) => {
   return (
      <div className="blog-details-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  <div className="blog-details-content mb-55">
                     <div className="details-image rel mb-35">
                        <Image src={single_blog?.thumb} alt="Blog Image" />
                        <div className="post-date">
                           <b>{single_blog?.date}</b>
                           <span>Jun</span> {/* Adjust month logic if needed */}
                        </div>
                     </div>
                     <ul className="blog-meta">
                        <li><i className="flaticon-user"></i> <Link href="#">Admin</Link></li>
                        <li><i className="flaticon-bubble-chat"></i> <Link href="#">05 Comment</Link></li>
                     </ul>

                     {single_blog?.desc && <p>{single_blog.desc}</p>}
                     <p>{single_blog.content}</p>

                     {/* Optional list/quote or other formatting can be added if needed */}

                     <hr />

                     <div className="tag-and-share">
                        <div className="row align-items-center">
                           <div className="col-md-7">
                              {single_blog?.tags && (
                                 <div className="tags">
                                    <strong>Tags: </strong>
                                    {single_blog.tags.map((tag, i) => (
                                       <a key={i} href="#">{tag}</a>
                                    ))}
                                 </div>
                              )}
                           </div>
                           <div className="col-md-5 text-md-end">
                              <div className="share-area">
                                 <strong>Share: </strong>
                                 <CommonSocialIcon />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Placeholder comments and form */}
                  <h4>02 Comment</h4>
                  <div className="blog-comment pt-25 pb-30">
                     <ul className="comment-list">
                        {/* You can map dynamic comment data here */}
                        <li className="comment">
                           <div className="comment-body">
                              <footer className="comment-meta">
                                 <div className="comment-author vcard">
                                    <Image className="avatar" alt="Author" src="/img/blog/comment-author1.jpg" width={50} height={50} />
                                    <b className="fn"><Link href="#">Leslie Alexander</Link></b>
                                 </div>
                                 <div className="comment-metadata">
                                    <Link href="#">10 Hours ago</Link>
                                 </div>
                              </footer>
                              <div className="comment-content">
                                 <p>This is a placeholder comment. Replace with dynamic content if available.</p>
                              </div>
                              <div className="reply">
                                 <Link rel="nofollow" className="comment-reply-link" href="#">Reply</Link>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <BlogDetailsForm />
               </div>
               <div className="col-lg-4">
                  {/* Sidebar widgets can go here */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogDetailsArea
