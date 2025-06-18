import { StaticImageData } from "next/image";

import authorImg_1 from "@/assets/img/testimonials/author1.jpg";
import authorImg_2 from "@/assets/img/testimonials/author2.jpg";
import authorImg_3 from "@/assets/img/testimonials/author3.jpg";

import quoteIcon_1 from "@/assets/img/testimonials/quote-icon1.png";
import quoteIcon_2 from "@/assets/img/testimonials/quote-icon2.png";
import quoteIcon_3 from "@/assets/img/testimonials/quote-icon3.png";

interface DataType {
   id: number;
   page:string;
   desc: string;
   name: string;
   designation: string;
   rating?:string[];
   img?:StaticImageData | undefined;
   item_bg?:string;
   quote_icon?:StaticImageData;
}

const testimonial_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      desc: "CILF gave me the skills and confidence to start my own business. Today, I can provide for my children independently",
      name: "Grace Abena Somuah",
      designation: "Accra, Ghana",
   },
   {
      id: 2,
      page:"home_1",
      desc: "Thanks to CILF’s support, my daughter received a scholarship, and I now run a successful hairdressing business..",
      name: "Gifty Nsiah",
      designation: "Accra, Ghana",
   },
   {
      id: 3,
      page:"home_1",
      desc: "The training and financial aid I received changed my life. I went from struggling to owning my own bakery!",
      name: "Mumin Abdul",
      designation: "Accra, Ghana",
   },
   {
      id: 4,
      page:"home_1",
      desc: "Gaining fair understanding on life and finances have helped me to better my enterpreneur skills. All of which was possible by the help of CILF",
      name: "Jesse Rayford",
      designation: "Accra, Ghana",
   }

]

export default testimonial_data;