import { StaticImageData } from "next/image";

// Existing Imports...
import galleryImg1 from "@/assets/img/portfolio/portfolio1.jpg";
import galleryImg2 from "@/assets/img/portfolio/portfolio2.jpg";
import galleryImg3 from "@/assets/img/portfolio/portfolio3.jpg";
import galleryImg4 from "@/assets/img/portfolio/portfolio4.jpg";
import galleryImg5 from "@/assets/img/portfolio/portfolio5.jpg";
import galleryImg6 from "@/assets/img/portfolio/portfolio6.jpg";
import galleryImg7 from "@/assets/img/about/about1.jpg";
import galleryImg8 from "@/assets/img/about/about2.jpg";
import galleryImg9 from "@/assets/img/about/about3.jpg";
import galleryImg10 from "@/assets/img/background/cta.jpg";
import galleryImg11 from "@/assets/img/footer/gallery1.jpg";
import galleryImg12 from "@/assets/img/footer/gallery2.jpg";
import galleryImg13 from "@/assets/img/footer/gallery3.jpg";
import galleryImg14 from "@/assets/img/footer/gallery4.jpg";
import galleryImg15 from "@/assets/img/footer/gallery5.jpg";
import galleryImg16 from "@/assets/img/footer/gallery6.jpg";
import galleryImg17 from "@/assets/img/video/video-bg.jpg";
import galleryImg18 from "@/assets/img/slider/slider2.jpg";
import galleryImg19 from "@/assets/img/slider/slider3.jpg";
import galleryImg20 from "@/assets/img/slider/slider4.jpg";
import galleryImg21 from "@/assets/img/causes/cause2.jpg";
import galleryImg22 from "@/assets/img/causes/cause3.jpg";
import galleryImg23 from "@/assets/img/causes/cause4.jpg";
import galleryImg24 from "@/assets/img/causes/cause5.jpg";
import galleryImg25 from "@/assets/img/gallery/g1.jpg";
import galleryImg26 from "@/assets/img/gallery/g2.jpg";
import galleryImg27 from "@/assets/img/gallery/g3.jpg";
import galleryImg28 from "@/assets/img/gallery/g4.jpg";
import galleryImg29 from "@/assets/img/gallery/g5.jpg";
import galleryImg30 from "@/assets/img/gallery/g6.jpg";
import galleryImg31 from "@/assets/img/gallery/g7.jpg";
import galleryImg32 from "@/assets/img/gallery/g8.jpg";
import galleryImg33 from "@/assets/img/gallery/g9.jpg";
import galleryImg34 from "@/assets/img/gallery/g10.jpg";
import galleryImg35 from "@/assets/img/gallery/g11.jpg";
import galleryImg36 from "@/assets/img/gallery/g12.jpg";
import galleryImg37 from "@/assets/img/gallery/g13.jpg";
import galleryImg38 from "@/assets/img/gallery/g14.jpg";
import galleryImg39 from "@/assets/img/gallery/g15.jpg";
import galleryImg40 from "@/assets/img/gallery/g16.jpg";
import galleryImg41 from "@/assets/img/gallery/g17.jpg";
import galleryImg42 from "@/assets/img/gallery/g18.jpg";
import galleryImg43 from "@/assets/img/gallery/g19.jpg";
import galleryImg44 from "@/assets/img/gallery/g20.jpg";
import galleryImg45 from "@/assets/img/gallery/g21.jpg";
import galleryImg46 from "@/assets/img/gallery/g22.jpg";
import galleryImg47 from "@/assets/img/gallery/g23.jpg";
import galleryImg48 from "@/assets/img/gallery/g24.jpg";
import galleryImg49 from "@/assets/img/gallery/g25.jpg";
import galleryImg50 from "@/assets/img/gallery/g26.jpg";
import galleryImg51 from "@/assets/img/gallery/f1.png";
import galleryImg52 from "@/assets/img/gallery/g28.jpg";
import galleryImg53 from "@/assets/img/gallery/g29.jpg";
import galleryImg54 from "@/assets/img/gallery/awards.png";

interface GalleryItem {
  id: number;
  image: StaticImageData;
  title: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, image: galleryImg1, title: "Gallery Image 1" },
  { id: 2, image: galleryImg2, title: "Gallery Image 2" },
  { id: 3, image: galleryImg3, title: "Gallery Image 3" },
  { id: 4, image: galleryImg4, title: "Gallery Image 4" },
  { id: 5, image: galleryImg5, title: "Gallery Image 5" },
  { id: 6, image: galleryImg6, title: "Gallery Image 6" },
  { id: 7, image: galleryImg7, title: "Gallery Image 7" },
  { id: 8, image: galleryImg8, title: "Gallery Image 8" },
  { id: 9, image: galleryImg9, title: "Gallery Image 9" },
  { id: 10, image: galleryImg10, title: "Gallery Image 10" },
  { id: 11, image: galleryImg11, title: "Gallery Image 11" },
  { id: 12, image: galleryImg12, title: "Gallery Image 12" },
  { id: 13, image: galleryImg13, title: "Gallery Image 13" },
  { id: 14, image: galleryImg14, title: "Gallery Image 14" },
  { id: 15, image: galleryImg15, title: "Gallery Image 15" },
  { id: 16, image: galleryImg16, title: "Gallery Image 16" },
  { id: 17, image: galleryImg17, title: "Gallery Image 17" },
  { id: 18, image: galleryImg18, title: "Gallery Image 18" },
  { id: 19, image: galleryImg19, title: "Gallery Image 19" },
  { id: 20, image: galleryImg20, title: "Gallery Image 20" },
  { id: 21, image: galleryImg21, title: "Gallery Image 21" },
  { id: 22, image: galleryImg22, title: "Gallery Image 22" },
  { id: 23, image: galleryImg23, title: "Gallery Image 23" },
  { id: 24, image: galleryImg24, title: "Gallery Image 24" },
  { id: 25, image: galleryImg25, title: "Gallery Image 25" },
  { id: 26, image: galleryImg26, title: "Gallery Image 26" },
  { id: 27, image: galleryImg27, title: "Gallery Image 27" },
  { id: 28, image: galleryImg28, title: "Gallery Image 28" },
  { id: 29, image: galleryImg29, title: "Gallery Image 29" },
  { id: 30, image: galleryImg30, title: "Gallery Image 30" },
  { id: 31, image: galleryImg31, title: "Gallery Image 31" },
  { id: 32, image: galleryImg32, title: "Gallery Image 32" },
  { id: 33, image: galleryImg33, title: "Gallery Image 33" },
  { id: 34, image: galleryImg34, title: "Gallery Image 34" },
  { id: 35, image: galleryImg35, title: "Gallery Image 35" },
  { id: 36, image: galleryImg36, title: "Gallery Image 36" },
  { id: 37, image: galleryImg37, title: "Gallery Image 37" },
  { id: 38, image: galleryImg38, title: "Gallery Image 38" },
  { id: 39, image: galleryImg39, title: "Gallery Image 39" },
  { id: 40, image: galleryImg40, title: "Gallery Image 40" },
  { id: 41, image: galleryImg41, title: "Gallery Image 41" },
  { id: 42, image: galleryImg42, title: "Gallery Image 42" },
  { id: 43, image: galleryImg43, title: "Gallery Image 43" },
  { id: 44, image: galleryImg44, title: "Gallery Image 44" },
  { id: 45, image: galleryImg45, title: "Gallery Image 45" },
  { id: 46, image: galleryImg46, title: "Gallery Image 46" },
  { id: 47, image: galleryImg47, title: "Gallery Image 47" },
  { id: 48, image: galleryImg48, title: "Gallery Image 48" },
  { id: 49, image: galleryImg49, title: "Gallery Image 49" },
  { id: 50, image: galleryImg50, title: "Gallery Image 50" },
  { id: 51, image: galleryImg51, title: "Gallery Image 51" },
  { id: 52, image: galleryImg52, title: "Gallery Image 52" },
  { id: 53, image: galleryImg53, title: "Gallery Image 53" },
  { id: 54, image: galleryImg54, title: "Gallery Image 54" },
];

export default galleryData;
