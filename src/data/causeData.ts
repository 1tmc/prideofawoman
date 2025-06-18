import { StaticImageData } from "next/image";

import causeThumb_1 from "@/assets/img/causes/cause2.jpg";
import causeThumb_2 from "@/assets/img/causes/cause6.jpg";
import causeThumb_3 from "@/assets/img/causes/cause3.jpg";
import causeThumb_4 from "@/assets/img/causes/cause4.jpg";
import causeThumb_5 from "@/assets/img/causes/cause5.jpg";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   title: string;
   desc?: string;
   progress_width?: string | number;
   progress_bg?: string;
   btn_bg?: string;
   price_color?: string;
   item_bg?: string;
   percentage?: number;
}

const cause_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: causeThumb_1,
      title: "Love Conference",
      desc: "An annual gathering that brings together women to foster unity, healing, spiritual growth, and love-centered discussions.",
      progress_width: "90%",
   },
   {
      id: 2,
      page: "home_1",
      img: causeThumb_2,
      title: "Donation at Elizabeth Home",
      desc: "Provided essentials and shared love with residents of the Elizabeth Home in the Eastern Region, promoting compassion and care.",
      progress_width: "85%",
      progress_bg: "progress-bar--green",
      btn_bg: "btn--green",
   },
   {
      id: 3,
      page: "home_1",
      img: causeThumb_3,
      title: "Junior High Schools Seminar",
      desc: "Organized seminars for JHS students to educate, inspire and build moral values in the next generation of women and leaders.",
      progress_width: "75%",
      progress_bg: "progress-bar--yellow",
      btn_bg: "btn--yellow",
   },
   {
      id: 4,
      page: "home_1",
      img: causeThumb_4,
      title: "Foundation to Empower Women and Children",
      desc: "Launch of a foundation dedicated to transforming the lives of women and children through education, mentorship and advocacy.",
      progress_width: "80%",
      progress_bg: "progress-bar--pink",
      btn_bg: "btn--pink",
   },
   {
      id: 5,
      page: "home_1",
      img: causeThumb_5,
      title: "Annual Donation 2023 – Pantang Hospital",
      desc: "Extended care and donations to the Women's Ward at Pantang Psychiatric Hospital to uplift and support vulnerable women.",
      progress_width: "88%",
      progress_bg: "progress-bar--blue",
      btn_bg: "btn--blue",
   },
   {
      id: 6,
      page: "home_1",
      img: causeThumb_1,
      title: "Annual Donation at Nsawam Prisons",
      desc: "Delivered spiritual support, essentials, and prayers to incarcerated women, reinforcing the message of love and second chances.",
      progress_width: "82%",
      progress_bg: "progress-bar--orange",
      btn_bg: "btn--orange",
   },
];

export default cause_data;
