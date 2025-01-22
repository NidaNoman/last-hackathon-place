import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';


const Herosection = async () => {
  const res = await client.fetch("*[_type == 'landingPage'][0]{'heroImg' : sections[0].heroImg.asset->url,'heroParagraph' : sections[0].heroParagraph,'heroHeading' : sections[0].heroHeading,'heroPara' : sections[0].heroPara,'heroBtnText' : sections[0].heroBtnText}")


const {heroImg, heroParagraph, heroHeading, heroPara, heroBtnText} = await res




  return (
    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[716px] lg:h-[800px] bg-blue-500 text-white mt-0">
      {/* Background Image */}
      <Image 
        src={heroImg} 
        alt="maingirl" 
        height={716} 
        width={1440} 
        className="w-full h-full object-cover" 
        priority 
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-6 sm:px-12 md:px-16">
        <div className="text-white text-center sm:text-left sm:ml-6 md:ml-10 lg:ml-20 md:w-3/4 lg:w-1/2">
          <p className="uppercase text-xs sm:text-sm lg:text-base tracking-widest mb-5 sm:mb-7">
          {heroParagraph}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-3 sm:my-4">
            {heroHeading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl my-4 sm:my-6">
              {heroPara}       <br /> 
            
          </p>
          <Link href={"/Shop"}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 lg:px-9 lg:py-5 rounded-lg transition">
            {heroBtnText}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;




