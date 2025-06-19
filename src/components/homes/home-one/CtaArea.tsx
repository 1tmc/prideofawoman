import Link from "next/link";

const CtaArea = () => {
  return (
    <div
      className="cta-area overlay bgs-cover pt-110 rpt-120 pb-120"
      style={{ backgroundImage: `url(/assets/img/background/cta.jpg)` }}
    >
      <div className="container container-1170">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center text-white">
              <h2>Our <span>Motto</span></h2>
              <p>Raising Women of Purpose, Power and Prayer.</p>
              <p>-We Partner With Men-</p>
              {/* Uncomment if donation functionality is available */}
              {/* <Link className="cr-btn mt-30" href="/support">Support the Vision</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
