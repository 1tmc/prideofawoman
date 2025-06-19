import Image from "next/image"


import aboutImg_1 from "@/assets/img/about/about1.jpg"
import aboutImg_2 from "@/assets/img/about/about2.jpg"
import aboutImg_3 from "@/assets/img/about/about3.jpg"
import aboutImg_4 from "@/assets/img/about/accra.jpg"
import aboutImg_5 from "@/assets/img/about/nkoranza.jpg"


const About = () => {
   return (
      <div className="about-area py-120">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 mb-80">
               <div className="about-image-part">
                     <div className="row">
                        <div>
                           <div >
                              <Image src={aboutImg_1} alt="About" 
                              style={{
                                 "maxWidth": 500, 
                                 "height":400, 
                                 "borderRadius":30,
                                 "marginLeft": 20
                              }}
                              />
                           </div>
                           
                        </div>
                        
                     </div>
                  </div>
               </div>

               <div className="col-lg-6  mb-80">
                  <div className="about-content-part rmt-65">
                     <div className="section-title mb-40">
                        <span className="section-title__subtitle mb-10">About Us</span>
                        <h2>Key Components <span>of Our Identity</span></h2>
                     </div>

                     <ul className="list-disc ml-5 mb-30">
                        <li><strong>“The Pride”</strong> – Suggests a sense of dignity, self-respect, and collective pride among the women in the network.</li>
                        <li><strong>“of a Woman”</strong> – Emphasizes the focus on women’s experiences, perspectives, and empowerment.</li>
                        <li><strong>“Christian”</strong> – Indicates that the network is founded on Christian values and principles.</li>
                        <li><strong>“Network”</strong> – Implies a connection or community of women who support and uplift each other.</li>
                     </ul>
                  </div>
               </div>
            </div>
{/* branches */}
            <div className="row mt-80">
               <div className="col-lg-12">
                  <div className="section-title mb-40 text-center">
                     <h2>Our <span>Branches</span></h2>
                  </div>
               </div>

               <div className="col-md-6 mb-30 text-center">
                  <Image
                     src={aboutImg_4}
                     alt="Accra Branch"
                     className="img-fluid rounded"
                     style={{ borderRadius: "20px", height: "auto", maxWidth: "100%" }}
                  />
                  <h5 className="mt-3">Accra Branch</h5>
                  <p className="text-sm">Serving women across Greater Accra with spiritual empowerment and leadership growth programs.</p>
               </div>

               <div className="col-md-6 mb-30 text-center">
                  <Image
                     src={aboutImg_5}
                     alt="Nkoranza Branch"
                     className="img-fluid rounded"
                     style={{ borderRadius: "20px", height: "auto", maxWidth: "100%" }}
                  />
                  <h5 className="mt-3">Nkoranza Branch</h5>
                  <p className="text-sm">A thriving hub of women’s fellowship and community transformation in the Bono East region.</p>
               </div>
            </div>
            {/* ✅ Branches Section End */}
            <div className="row mt-80">
               <div className="col-lg-12">
                  <div className="section-title mb-40 text-center">
                     <h2>Mission, Vision <span>and Motto</span></h2>
                  </div>
               </div>

               <div className="col-lg-6 mb-30">
                  <h5 className="fw-bold">Mission Statement:</h5>
                  <p>
                     The Pride of a Woman Christian Network is committed to empowering women spiritually, emotionally, and economically through Christ-centered mentorship, education, and community support. We exist to restore dignity, purpose, and leadership among women across generations.
                  </p>
               </div>

               <div className="col-lg-6 mb-30">
                  <h5 className="fw-bold">Vision Statement:</h5>
                  <p>
                     To be a global Christian platform where women are nurtured, transformed, and positioned as impactful leaders in their homes, churches, and communities through the power of God’s Word and Spirit-led development.
                  </p>
               </div>

               <div className="col-lg-12">
                  <h5 className="fw-bold">Our Motto:</h5>
                  <p className="fst-italic">
                     Nurturing Women. Restoring Dignity. Transforming Nations.
                  </p>
               </div>
            </div>
            <div className="about-image-part">
               <div className="row image-row">
                  <div className="image">
                     <Image src={aboutImg_2} alt="About" />
                  </div>
                  <div className="image">
                     <Image src={aboutImg_1} alt="About" />
                  </div>
               </div>
            </div>


            <div className="row justify-content-center mt-80" style={{ backgroundColor: "#f8f8f8", paddingTop: "60px", paddingBottom: "60px" }}>
               <div className="col-lg-10 text-center">
                  <div className="section-title mb-40">
                     <h2>Our <span>Goals</span> and <span>Objectives</span></h2>
                  </div>
                  <div className="text-justify mx-auto" style={{ maxWidth: "auto" }}>
                     <p><strong>The Pride of a Woman Christian Network is driven by the following goals and objectives:</strong></p>
                     <p><strong>A. Spiritual Empowerment:</strong> Equip women through sound biblical teaching, prayer, and mentorship, strengthening their relationship with God and identity in Christ.</p>
                     <p><strong>B. Leadership Development:</strong> Raise and mentor women leaders who will influence society through integrity, wisdom, and godly principles.</p>
                     <p><strong>C. Emotional and Social Support:</strong> Provide safe spaces for healing, sharing, and restoration through counseling, fellowship, and support groups.</p>
                     <p><strong>D. Capacity Building:</strong> Empower women with practical life skills and opportunities for personal and professional growth in their homes, ministries, and businesses.</p>
                     <p><strong>E. Community Impact:</strong> Foster a spirit of service and responsibility, encouraging women to initiate and participate in outreach projects that uplift the less privileged and transform communities.</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center mt-60"  style={{ backgroundColor: "#f8f8f8", paddingTop: "60px", paddingBottom: "60px" }}>
               <div className="col-lg-10 text-center">
                  <div className="section-title mb-30">
                     <h2>What <span>Our Name</span> Represents</h2>
                  </div>
                  <div className="text-left">
                     <p><strong>The name “The Pride of a Woman Christian Network” signifies:</strong></p>
                     <ul className="list-disc ml-5">
                        <li>A safe space for Christian women to connect, share, and grow in their faith.</li>
                        <li>A platform for women to empower and support each other in their personal and spiritual journeys.</li>
                        <li>A community that celebrates the strengths, talents, and accomplishments of women.</li>
                        <li>A network that provides resources, guidance, and encouragement for women to live out their Christian values.</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center mt-60"  style={{ backgroundColor: "#f8f8f8", paddingTop: "60px", paddingBottom: "60px" }}>
               <div className="col-lg-10 text-center">
                  <h4 className="mb-3"><span>Our Core Values</span></h4>
                  <ul className="list-disc text-left ml-10">
                     <li>- Christ-Centered Living</li>
                     <li>- Integrity and Accountability</li>
                     <li>- Compassion and Love</li>
                     <li>- Excellence and Leadership</li>
                     <li>- Unity and Sisterhood</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
