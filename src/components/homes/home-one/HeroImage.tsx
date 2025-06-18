'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import bgImageDesktop from '@/assets/img/background/herophoto.png';
import bgImageMobile from '@/assets/img/background/herophoto-mobile.png';

const HeroImage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {isMobile ? (
        <Image
          src={bgImageMobile}
          alt="Hero mobile background"
          layout="intrinsic"
          placeholder="blur"
          priority
          className="max-h-full max-w-full object-contain"
        />
      ) : (
        <Image
          src={bgImageDesktop}
          alt="Hero desktop background"
          
        />
      )}
    </section>
  );
};

export default HeroImage;
