import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg"
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg"
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg"

interface DataType {
   id: number;
   page: string;
   icon_bg?: string;
   icon_name?: string;
   title: string;
   desc: string;
   btn_bg?: string;
   bg_img?: StaticImageData;
   item_bg?: string;
}

const features_data: DataType[] = [
   // Home 1 - Main Features
   {
      id: 1,
      page: "home_1",
      icon_name: "flaticon-support",
      icon_bg: "feature-item__icon--red",
      title: "Empower Women",
      desc: "Support our mission to uplift and transform the lives of women through Christ.",
   },
   {
      id: 2,
      page: "home_1",
      icon_name: "flaticon-teamwork",
      icon_bg: "feature-item__icon--green",
      title: "Become a Volunteer",
      desc: "Join our community and help create impact through service and love.",
   },
   {
      id: 3,
      page: "home_1",
      icon_name: "flaticon-heart",
      icon_bg: "feature-item__icon--yellow",
      title: "Support Single Mothers",
      desc: "Help provide resources and care for struggling single mothers and their children.",
   },

   // Single Features - Sidebar Slider
   {
      id: 1,
      page: "single_features",
      title: "Faith-Based Support",
      desc: "We walk with women in faith, empowering them spiritually and emotionally.",
   },
   {
      id: 2,
      page: "single_features",
      title: "Community Outreach",
      desc: "Your giving helps us reach out with love, training, and hope.",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page: "single_features",
      title: "Sponsor a Cause",
      desc: "Be a part of changing lives by sponsoring a woman-focused initiative.",
      btn_bg: "btn--green",
   },
];

export default features_data;
