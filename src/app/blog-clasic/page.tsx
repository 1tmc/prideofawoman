import BlogClasic from "@/components/blogs/blog-clasic";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Blog Classic CILF- Foundation",
};
const index = () => {
   return (
      <Wrapper>
         <BlogClasic />
      </Wrapper>
   )
}

export default index