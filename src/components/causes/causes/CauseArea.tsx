import Image from "next/image";
import Link from "next/link";

import causeThumb_1 from "@/assets/img/causes/cause2.jpg";
import causeThumb_2 from "@/assets/img/causes/finance.jpg";
import causeThumb_3 from "@/assets/img/causes/cause3.jpg";
import causeThumb_4 from "@/assets/img/causes/cause5.jpg";
import causeThumb_5 from "@/assets/img/causes/cause4.jpg";
import causeThumb_6 from "@/assets/img/causes/cause6.jpg";

const projectData = [
  {
    id: 1,
    title: "Love Conference",
    points: [
      "Annual gathering of women",
      "Fostering unity and healing",
      "Spiritual growth sessions",
      "Love-centered discussions",
    ],
    description:
      "An annual gathering that brings together women to foster unity, healing, spiritual growth, and love-centered discussions.",
    img: causeThumb_1,
  },
  {
    id: 2,
    title: "Donation at Elizabeth Home",
    points: [
      "Provision of essential items",
      "Support to residents",
      "Promoting compassion and care",
    ],
    description:
      "Provided essentials and shared love with residents of the Elizabeth Home in the Eastern Region, promoting compassion and care.",
    img: causeThumb_2,
  },
  {
    id: 3,
    title: "Junior High Schools Seminar",
    points: [
      "Educational seminars for students",
      "Inspiring moral values",
      "Empowering future women leaders",
    ],
    description:
      "Organized seminars for JHS students to educate, inspire and build moral values in the next generation of women and leaders.",
    img: causeThumb_3,
  },
  {
    id: 4,
    title: "Foundation to Empower Women and Children",
    points: [
      "Launch of foundation",
      "Education and mentorship programs",
      "Advocacy for women and children",
    ],
    description:
      "Launch of a foundation dedicated to transforming the lives of women and children through education, mentorship and advocacy.",
    img: causeThumb_5,
  },
  {
    id: 5,
    title: "Annual Donation 2023 – Pantang Hospital",
    points: [
      "Donations to Women's Ward",
      "Support to vulnerable women",
      "Extending care and compassion",
    ],
    description:
      "Extended care and donations to the Women's Ward at Pantang Psychiatric Hospital to uplift and support vulnerable women.",
    img: causeThumb_4,
  },
  {
    id: 6,
    title: "Annual Donation at Nsawam Prisons",
    points: [
      "Spiritual support and prayers",
      "Provision of essentials",
      "Message of love and second chances",
    ],
    description:
      "Delivered spiritual support, essentials, and prayers to incarcerated women, reinforcing the message of love and second chances.",
    img: causeThumb_6,
  },
];

const CauseArea = () => {
  return (
    <div className="project-feature-area pt-120 pb-90 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-65">
              <span className="section-title__subtitle mb-10">Programs and Services</span>
              <h3>
                Our <span>Projects</span>
              </h3>
            </div>
          </div>
        </div>

        {projectData.map((item, index) => (
          <div className="row align-items-center mb-60" key={item.id}>
            <div className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-2" : ""}`}>
              <div className="project-image">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="rounded"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "400px",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-content px-3">
                <h4>{item.title}</h4>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CauseArea;
