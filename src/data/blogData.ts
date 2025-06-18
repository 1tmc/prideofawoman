import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/blog-clasic1.jpg"
import blogThumb_2 from "@/assets/img/blog/blog-clasic2.jpeg"
import blogThumb_3 from "@/assets/img/blog/blog-clasic3.jpg"
import blogThumb_4 from "@/assets/img/blog/blog4.jpg"
import blogThumb_5 from "@/assets/img/blog/blog5.jpg"
import blogThumb_6 from "@/assets/img/blog/blog6.jpg"

import blogClasicThumb_1 from "@/assets/img/blog/blog-clasic1.jpg"
import blogClasicThumb_2 from "@/assets/img/blog/blog-clasic2.jpg"
import blogClasicThumb_3 from "@/assets/img/blog/blog-clasic3.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   slug: string;
   date: number;
   desc?: string;
   content: string;
   item_bg?: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: blogThumb_1,
      date: 13,
      title: "Rising Above: Single Mothers Building a Better Tomorrow",
      slug: "rising-above-single-mothers-building-a-better-tomorrow",
      desc: "Discover how single mothers are breaking free from societal limitations through empowerment and purpose-driven living.",
      content: `Single mothers often face numerous challenges that limit their opportunities. However, many are rising above these obstacles through empowerment programs and community support. By focusing on education, career development, and faith, single mothers are creating better futures for themselves and their children. This blog explores inspiring stories of resilience and how collective efforts can bring lasting change.`
   },
   {
      id: 2,
      page: "home_1",
      thumb: blogThumb_2,
      date: 20,
      title: "Faith & Resilience: How Women Overcome Life’s Toughest Trials",
      slug: "faith-and-resilience-how-women-overcome-lifes-toughest-trials",
      desc: "Explore inspiring stories of faith, perseverance, and victory that prove no obstacle is insurmountable.",
      content: `Faith can be a powerful source of strength when facing life’s most difficult challenges. Many women have demonstrated incredible resilience, overcoming trials through perseverance and belief. This article shares real-life testimonies of triumph, reminding us that with faith and support, no challenge is too great to overcome.`
   },
   {
      id: 3,
      page: "home_1",
      thumb: blogThumb_3,
      date: 31,
      title: "Empowering Her Voice: Advocating for the Voiceless",
      slug: "empowering-her-voice-advocating-for-the-voiceless",
      desc: "Learn why advocating for the rights and needs of women is crucial for community transformation.",
      content: `Advocacy plays a vital role in transforming communities. Empowering women to speak out for themselves and others who are voiceless helps address inequality and promote justice. This blog delves into advocacy initiatives, community organizing, and the importance of raising voices for systemic change.`
   },

   // inner page

   {
      id: 1,
      page: "inner_page",
      thumb: blogThumb_1,
      date: 13,
      title: "Rising Above: Single Mothers Building a Better Tomorrow",
      slug: "inner-rising-above-single-mothers-building-a-better-tomorrow",
      desc: "Discover how single mothers are breaking free from societal limitations through empowerment and purpose-driven living.",
      content: `This expanded article highlights programs and stories that showcase how single mothers transform adversity into opportunity. The piece details practical steps and community efforts enabling these women to rise above societal limitations.`
   },
   {
      id: 2,
      page: "inner_page",
      thumb: blogThumb_2,
      date: 15,
      title: "Faith & Resilience: How Women Overcome Life’s Toughest Trials",
      slug: "inner-faith-and-resilience-how-women-overcome-lifes-toughest-trials",
      desc: "Explore inspiring stories of faith, perseverance, and victory that prove no obstacle is insurmountable.",
      content: `A deeper look into the role of faith in personal resilience. This blog explores various journeys of women who have overcome adversity through spiritual strength and community support.`
   },
   {
      id: 3,
      page: "inner_page",
      thumb: blogThumb_3,
      date: 18,
      title: "Empowering Her Voice: Advocating for the Voiceless",
      slug: "inner-empowering-her-voice-advocating-for-the-voiceless",
      desc: "Learn why advocating for the rights and needs of women is crucial for community transformation.",
      content: `The blog details advocacy strategies and personal stories from women leaders driving change within their communities, emphasizing the power of voice and action.`
   },
   {
      id: 4,
      page: "inner_page",
      thumb: blogThumb_4,
      date: 20,
      title: "Volunteerism with Impact: Be the Light in Someone’s Darkness",
      slug: "inner-volunteerism-with-impact-be-the-light-in-someones-darkness",
      desc: "Find out how volunteering in women-focused ministries can bring hope, healing, and change.",
      content: `Volunteering offers a meaningful way to contribute to women’s ministries. This article highlights volunteer stories, the impact of service, and ways you can make a difference.`
   },
   {
      id: 5,
      page: "inner_page",
      thumb: blogThumb_5,
      date: 22,
      title: "Stories of Hope: From Pain to Purpose",
      slug: "inner-stories-of-hope-from-pain-to-purpose",
      desc: "These testimonies show how women overcame hardship with God's help and a supportive community.",
      content: `Inspiring stories that trace journeys from pain to purpose, this blog celebrates the power of faith and community in healing and rebuilding lives.`
   },
   {
      id: 6,
      page: "inner_page",
      thumb: blogThumb_6,
      date: 24,
      title: "Wisdom for Wealth: Teaching Women Financial Stewardship",
      slug: "inner-wisdom-for-wealth-teaching-women-financial-stewardship",
      desc: "Learn how financial literacy empowers single mothers to build a stable and independent future.",
      content: `Financial education is key to independence. This blog provides insights into teaching women about budgeting, saving, and investing for a secure future.`
   },

   // clasic blog

   {
      id: 1,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Equipping Women with Skills for Destiny",
      slug: "clasic-equipping-women-with-skills-for-destiny",
      desc: "Training and empowerment sessions help women become self-reliant and confident in their calling.",
      content: `Skill development sessions enable women to gain confidence and pursue their destinies. This article outlines key training programs and success stories.`
   },
   {
      id: 2,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "Funding Her Future: Microloans & Mentorship",
      slug: "clasic-funding-her-future-microloans-and-mentorship",
      desc: "Discover how access to small capital and mentoring transforms dreams into thriving businesses.",
      content: `Microloans combined with mentorship provide a powerful foundation for women entrepreneurs. This blog explains how these resources help launch sustainable businesses.`
   },
   {
      id: 3,
      page: "clasic_blog",
      thumb: blogClasicThumb_3,
      date: 18,
      title: "Educating the Next Generation",
      slug: "clasic-educating-the-next-generation",
      desc: "Scholarships and school support for children of single mothers create a path to lasting change.",
      content: `Education breaks cycles of poverty. This article highlights scholarship initiatives and educational support for children in need.`
   },
   {
      id: 4,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 20,
      title: "Healing Through Testimonies: The Power of Story",
      slug: "clasic-healing-through-testimonies-the-power-of-story",
      desc: "When women share their journeys, others find courage, hope, and healing through shared experiences.",
      content: `Personal stories create healing spaces. This blog emphasizes how testimony sharing builds community and strengthens faith.`
   },
   {
      id: 5,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 20,
      title: "Faith + Finance: Building Stable Homes",
      slug: "clasic-faith-plus-finance-building-stable-homes",
      desc: "Workshops in budgeting, saving, and investing help women honor God with their finances.",
      content: `This article explores how faith-based financial workshops empower women to manage their homes and finances effectively.`
   },
   {
      id: 6,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "Your Gift Matters: Real Impact from Real People",
      slug: "clasic-your-gift-matters-real-impact-from-real-people",
      desc: "See how every donation—big or small—empowers women to lead stronger, faith-filled lives.",
      content: `Donations fuel life-changing programs. This blog explains the tangible impact gifts have on empowering women and communities.`
   },
   {
      id: 7,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Thriving Communities Start with Empowered Women",
      slug: "clasic-thriving-communities-start-with-empowered-women",
      desc: "Learn how uplifting women creates lasting ripple effects in families, churches, and society.",
      content: `Empowered women strengthen communities. This article discusses the broad benefits of supporting women in all spheres of life.`
   },
]

export default blog_data;
