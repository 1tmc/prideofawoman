import { StaticImageData } from "next/image"

import portfolioThumb_1 from "@/assets/img/portfolio/portfolio1.jpg";
import portfolioThumb_2 from "@/assets/img/portfolio/portfolio2.jpg";
import portfolioThumb_3 from "@/assets/img/portfolio/portfolio3.jpg";


interface DataType {
   id: number,
   thumb: StaticImageData;
   title: string;
   category: string;
}[];

const portfolio_data: DataType[] = [
   {
      id: 1,
      thumb: portfolioThumb_1,
      title: "Health Education and Screening",
      category: "Health",
   },
   {
      id: 2,
      thumb: portfolioThumb_2,
      title: "School Mentorship and Donation Program",
      category: "Education",
   },
   {
      id: 3,
      thumb: portfolioThumb_3,
      title: "The Dodi Island Project",
      category: "Environmental Development",
   }
]

export default portfolio_data;
