 "use client"

import blog_data from "@/data/blogData";
import Image from "next/image";
import { useState } from "react";

const BlogArea = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const blogs = blog_data.filter(item => item.page === "inner_page");

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const itemOffset = (currentPage - 1) * itemsPerPage;
  const currentItems = blogs.slice(itemOffset, itemOffset + itemsPerPage);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blog-page-area py-120 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          {currentItems.map((item) => (
            <div key={item.slug} className="col-xl-4 col-md-6">
              <div className="blog-item">
                <div className="blog-item__img">
                  <Image src={item.thumb} alt={item.title} />
                  <div className="post-date">
                    <b>{item.date}</b>
                    <span>{new Date(item.date).toLocaleString("default", { month: "short" })}</span>
                  </div>
                </div>
                <div className="blog-item__content">
                  <ul className="blog-meta">
                    <li><i className="flaticon-user"></i> <span>Pride Team</span></li>
                    <li><i className="flaticon-bubble-chat"></i> <span>Comments</span></li>
                  </ul>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination pt-20">
          <ul className="list-wrap d-flex align-items-center justify-content-center" style={{ margin: 0 }}>
            <li className="prev page-numbers">
              <a onClick={() => handlePageClick(currentPage - 1)} style={{ cursor: 'pointer' }} className={currentPage === 1 ? 'disabled' : ''}>
                <i className="flaticon-left-chevron"></i>
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1} className={index + 1 === currentPage ? 'page-numbers current' : 'page-numbers'}>
                <a onClick={() => handlePageClick(index + 1)} style={{ cursor: "pointer" }}>{index + 1}</a>
              </li>
            ))}
            <li className="next page-numbers">
              <a onClick={() => handlePageClick(currentPage + 1)} style={{ cursor: 'pointer' }} className={currentPage === totalPages ? 'disabled' : ''}>
                <i className="flaticon-chevron"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
