import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/event1.jpg";
import eventThumb_2 from "@/assets/img/events/event2.jpg";
import eventThumb_3 from "@/assets/img/events/event3.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   date?: string | number;
   city: string;
   time?: string;
   item_bg?: string;
   desc?: string;
}

const event_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: eventThumb_1,
      title: "Annual Conference",
      date: "November, 2025",
      city: "Ghana",
   },
   {
      id: 2,
      page: "home_1",
      thumb: eventThumb_2,
      title: "Movie Night Event",
      date: "July 1, 2025",
      city: "Ghana",
   },
   {
      id: 3,
      page: "home_1",
      thumb: eventThumb_3,
      title: "Kenya Outreach & Inauguration",
      date: "December, 2025",
      city: "Kenya",
   },
];

export default event_data;
