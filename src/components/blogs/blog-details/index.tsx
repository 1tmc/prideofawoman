'use client';

import React from "react";
import Image from "next/image";

const BlogDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Image
        src="/assets/img/blog/blog01.jpg" // Replace with actual static image
        alt="Sample Blog Title"
        className="rounded-xl w-full h-auto mb-6"
        width={800}
        height={400}
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Sample Blog Title
      </h1>
      <p className="text-sm text-gray-500 mb-2">Published on May 24, 2025</p>
      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet massa ac neque dictum vestibulum.
        <br /><br />
        This is just a placeholder blog detail content. You can replace this with your actual content, layout, or rich-text data from the CMS or JSON.
      </div>
    </div>
  );
};

export default BlogDetails;
