import blog_data from "@/data/blogData";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogDetailsPageProps {
  params: { slug: string };
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  const blog = blog_data.find((item) => item.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Image
        src={blog.thumb}
        alt={blog.title}
        width={800}
        height={400}
        className="rounded-xl w-full h-auto mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">Published on {blog.date}</p>
      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
