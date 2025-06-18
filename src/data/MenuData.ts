interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        has_dropdown: true,
        title: "About Us",
        link: "/about",
        sub_menus: [
            { link: "/about", title: "About Us" },
            { link: "/faqs", title: "FAQ Page" }
        ],
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Projects",
        link: "/causes"
    },
    {
        id: 4,
        has_dropdown: false,
        title: "What's Next",
        link: "/events"
    },
    {
        id: 5,
        has_dropdown: true,
        title: "Contact",
        link: "/contact",
        sub_menus: [
            { link: "/contact", title: "Contact Us" },
            { link: "/blog", title: "Blog" },
            { link: "/blog-clasic", title: "Blog Classic" }
        ],
    },
    // {
    //     id: 6,
    //     has_dropdown: false,
    //     title: "Gallery",
    //     link: "/portfolio"
    // },
];
export default menu_data;
