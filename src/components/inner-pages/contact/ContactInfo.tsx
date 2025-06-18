import Link from "next/link";
import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface ContactInfoType {
  id: number;
  item_bg?: string;
  icon: JSX.Element;
  title: string;
  contact_info?: {
    info_link: string;
    info_title: string;
  }[];
  contact_info_text?: JSX.Element;
}

const contact_data: ContactInfoType[] = [
  {
    id: 1,
    item_bg: "contact-info-item--green",
    icon: <FiPhone className="text-green-600 text-3xl" />,
    title: "Office Line",
    contact_info: [
      {
        info_link: "tel:+233554407327",
        info_title: "+233 55 440 7327",
      },
    ],
  },
  {
    id: 2,
    item_bg: "contact-info-item--yellow",
    icon: <FaWhatsapp className="text-yellow-500 text-3xl" />,
    title: "WhatsApp",
    contact_info: [
      {
        info_link: "https://wa.me/233554407327",
        info_title: "+233 55 440 7327",
      },
    ],
  },
  {
    id: 3,
    item_bg: "contact-info-item--blue",
    icon: <FiMail className="text-purple-600 text-3xl" />,
    title: "Email Address",
    contact_info: [
      {
        info_link: "mailto:prideofawoman2016@gmail.com",
        info_title: "prideofawoman2016@gmail.com",
      },
    ],
  },
];

const ContactInfo = () => {
  return (
    <div className="contact-info-area pb-85">
      <div className="container">
        <div className="row justify-content-center">
          {contact_data.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6">
              <div className={`contact-info-item ${item.item_bg || ""}`}>
                <div className="contact-info__icon mb-2">
                  {item.icon}
                </div>
                <h5>{item.title}</h5>
                <div className="contact-info__text">
                  {item.contact_info
                    ? item.contact_info.map((info, index) => (
                        <React.Fragment key={index}>
                          <Link
                            href={info.info_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.info_title}
                          </Link>
                          <br />
                        </React.Fragment>
                      ))
                    : item.contact_info_text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
