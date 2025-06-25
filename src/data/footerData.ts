interface DataType {
   id: number;
   page: string;
   widget_title: string;
   footer_link: {
     link: string;
     link_title: string;
   }[];
 }
 
 const footer_data: DataType[] = [
   {
     id: 1,
     page: "home_1",
     widget_title: "Quick Links",
     footer_link: [
       { link: "/", link_title: "Home" },
       { link: "/about", link_title: "About Us" },
       { link: "/publications", link_title: "Publications" },
       { link: "/contact", link_title: "Contact" },
     ],
   },
   {
     id: 2,
     page: "home_1",
     widget_title: "Support",
     footer_link: [
       { link: "/donate", link_title: "Donate" },
       { link: "/contact", link_title: "Volunteer" },
       { link: "/contact", link_title: "Partner With Us" },
     ],
   },
   {
     id: 3,
     page: "home_1",
     widget_title: "Contact Info",
     footer_link: [
       { link: "#", link_title: "Phone: 0554407327" },
       { link: "#", link_title: "Email: prideofawoman2016@gmail.com" },
     ],
   },
 ];
 
 export default footer_data;
 