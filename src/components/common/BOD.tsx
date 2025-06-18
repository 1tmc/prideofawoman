import Image from "next/image";

import profile1 from "@/assets/img/valunteer/valunteer1.jpg";
import profile2 from "@/assets/img/valunteer/valunteer2.png";
import profile3 from "@/assets/img/valunteer/valunteer3.png";

const BOD = () => {
  const team = [
    {
      image: profile1,
      name: "Abigail Kyeremeh",
      position: "Founder & President",
    },
    {
      image: profile2,
      name: "Eric Kofi Kyeremeh",
      position: "CEO · Welcraft Co. Ltd",
    },
    {
      image: profile3,
      name: "Joshua Yirenkyi (Smart Opoku)",
      position: "Legal Advisor",
    },
  ];

  return (
    <div className="about-area py-60">
      <div className="container">
        <div className="row align-items-center">
          {/* — Left text — */}
          <div className="col-lg-6">
            <div className="about-content-part rmt-65">
              <div className="section-title mb-30">
                <span className="section-title__subtitle mb-10">Leadership</span>
                <h2>
                  Meet Our <span>Board of Directors</span>
                </h2>
              </div>
              <p>
                Guided by faith and a shared commitment to women’s empowerment, our board steers
                The Pride of A Woman Christian Network toward lasting impact. Each member brings
                unique expertise, united by a passion for service and transformational leadership.
              </p>
            </div>
          </div>

          {/* — Right images — */}
          <div className="col-lg-6">
            <div className="row g-3 justify-content-center">
              {team.map((member) => (
                <div key={member.name} className="col-12 col-sm-6">
                  <div className="text-center">
                    <div className="mx-auto mb-2 overflow-hidden rounded-3 shadow-lg" style={{ width: 180, height: 180 }}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={180}
                        height={180}
                        className="object-cover w-100 h-100"
                        priority
                      />
                    </div>
                    <h4 className="mb-0 text-lg font-semibold">{member.name}</h4>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOD;
