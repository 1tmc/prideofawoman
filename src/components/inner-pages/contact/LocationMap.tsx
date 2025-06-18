const LocationMap = () => {
   return (
     <div className="contact-page-map wow fadeInUp delay-0-2s">
       <div className="our-location" style={{ borderRadius: '8px', overflow: 'hidden' }}>
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1984.9981948228567!2d-0.18586300000000003!3d5.713655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d7607ba98d9%3A0x18b3adf10713b473!2sPantang%20Abokobi%20Rd%2C%20Ghana!5e0!3m2!1sen!2sus!4v1748947691675!5m2!1sen!2sus"
           style={{ border: 0, width: "100%", height: "450px" }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           title="Pride of a Woman Location"
         ></iframe>
       </div>
     </div>
   );
 };
 
 export default LocationMap;
 