

import Image from 'next/image';

export default function ProductPromo(){
  return (
    <div className="flex flex-col md:flex-row-reverse items-center bg-[#23856D] px-6 md:px-[195px] py-10 text-white">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
        <p className="uppercase text-sm font-semibold tracking-wide mb-2">Summer 2020</p>
        <h1 className="font-bold mb-4 text-3xl md:text-[50px] md:leading-[80px] leading-tight">
          Vita Classic Product
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          We know how large objects will act, we know how large objects will act. We know.
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <p className="text-xl md:text-2xl font-semibold">$16.48</p>
          <button className="bg-white text-[#23856D] font-semibold px-4 md:px-6 py-2 rounded hover:bg-gray-100">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center order-1 md:order-2">
        {/* Wrapper div for Image */}
        <div className="rounded-lg p-2 md:p-4 inline-block w-full max-w-[400px]">
          <Image
            src="/copy.png" // Transparent PNG image path
            alt="Product Image"
            layout="responsive"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};


