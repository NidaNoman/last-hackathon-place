


import Image from "next/image";

export default function EditorsPick(){
  return (
    <section className="py-10 bg-white px-6 md:px-[195px]">
      <div className="text-center mb-8">
        <h2 className="font-bold text-[#252B42] text-[24px] leading-[32px]">EDITORS PICK</h2>
        <p className="text-sm text-[14px] leading-[20px] text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px] max-w-7xl mx-auto">
        {/* MEN */}
        <div className="relative group">
          <Image
            src="/shop1.jpg"
            alt="Men"
            layout="responsive"
            width={500}
            height={750}
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white text-gray-800 px-4 py-2 font-bold">MEN</span>
          </div>
        </div>

        {/* WOMEN */}
        <div className="relative group">
          <Image
            src="/shop2.jpg"
            alt="Women"
            layout="responsive"
            width={500}
            height={750}
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white text-gray-800 px-4 py-2 font-bold">WOMEN</span>
          </div>
        </div>

        {/* ACCESSORIES */}
        <div className="relative group">
          <Image
            src="/shop4.png"
            alt="Accessories"
            layout="responsive"
            width={250}
            height={350}
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white text-gray-800 px-4 py-2 font-bold">ACCESSORIES</span>
          </div>
        </div>

        {/* KIDS */}
        <div className="relative group">
          <Image
            src="/edit.jpg"
            alt="Kids"
            layout="responsive"
            width={250}
            height={350}
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white text-gray-800 px-4 py-2 font-bold">KIDS</span>
          </div>
        </div>
      </div>
    </section>
  );
};


