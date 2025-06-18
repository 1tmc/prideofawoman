import { StaticImageData } from "next/image";

import volunteerThumb_1 from "@/assets/img/valunteer/valunteer1.jpg";
import volunteerThumb_2 from "@/assets/img/valunteer/valunteer2.png";
import volunteerThumb_3 from "@/assets/img/valunteer/valunteer3.png";
import volunteerThumb_4 from "@/assets/img/valunteer/valunteer4.png";
import volunteerThumb_5 from "@/assets/img/valunteer/valunteer5.png";
import volunteerThumb_6 from "@/assets/img/valunteer/valunteer6.png";



interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   item_bg?: string;
}

const volunteer_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: volunteerThumb_1,
      name: "Founder & Operations Manager",
      item_bg: "valunteer-item--green",
   },
   {
      id: 2,
      page: "home_1",
      thumb: volunteerThumb_4,
      name: "Administrative Coordinator",
      item_bg: "valunteer-item--green",
   },
   {
      id: 3,
      page: "home_1",
      thumb: volunteerThumb_2,
      name: "Strategy Specialist"
   },
   {
      id: 4,
      page: "home_1",
      thumb: volunteerThumb_6,
      name: "Community Advisors",
      item_bg: "valunteer-item--green",
   },
   {
      id: 5,
      page: "home_1",
      thumb: volunteerThumb_3,
      name: "Project Coordinator",
      item_bg: "valunteer-item--green",
   },
   {
      id: 6,
      page: "home_1",
      thumb: volunteerThumb_5,
      name: "Community Advisor"
   },

]

export default volunteer_data;