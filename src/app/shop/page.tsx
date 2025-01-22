

import Footer from "@/components/footer";
import Nas from "@/components/shopnav";
import ShopPro from "@/components/shopproduct";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function Shop() {


interface Product{
  cardSecBanner : string;
  cardSectionSmallH : string ;
  cardSectionHeading : string;
  cardSectionOldPrice : number;
  cardSectionNewPrice : number;
  cardSecImg : string
}
 const res: Product[] = await client.fetch(`*[_type == 'productPage'][0].sections[0].Card[]{'cardSecBanner' : cardSecBanner,
  'cardSectionSmallH': cardSectionSmallH,'cardSectionHeading' : cardSectionHeading,'cardSectionOldPrice' :
   cardSectionOldPrice,'cardSectionNewPrice': cardSectionNewPrice,'cardSecImg': cardSecImg.asset -> url,} `)



















  return (
    <div>
      <Nas />
      {/* Shop Banner Section */}
      {/* <section className="h-[92px] pt-[24px] bg-[#FAFAFA]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-[#252B42] leading-[32px]">
            Shop
          </h1>
          <nav className="text-sm text-gray-600">
            <a href="#" className="hover:text-green-700 text-[#252B42]">
              Home
            </a>
            <span className="mx-2">&gt;</span> <span>Shop</span>
          </nav>
        </div>
      </section> */}

<section className="h-[92px] pt-[24px] bg-[#FAFAFA]">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
    <h1 className="text-xl sm:text-2xl font-bold text-[#252B42] leading-[32px]">
      Shop
    </h1>
    <nav className="text-sm text-gray-600">
      <a href="#" className="hover:text-green-700 text-[#252B42]">
        Home
      </a>
      <span className="mx-2">&gt;</span> 
      <a href="/shopss" className="text-[#252B42] hover:text-green-700">Shop</a>
    </nav>
  </div>
</section>















      {/* Shop Section */}
      <main className="max-w-screen-xl mx-auto bg-[#FAFAFA] px-4 sm:px-8 lg:px-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex flex-col items-center justify-center"
            >
              <div className="relative pb-[48px] flex items-center justify-center">
                <Image
                  src={`/card${index + 1}.png`}
                  alt={`card ${index + 1}`}
                  layout="intrinsic"
                  objectFit="cover"
                  height={271}
                  width={206}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Filter and Views Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Showing all 12 results
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <button className="bg-gray-200 px-3 py-2 rounded">🔳</button>
            <select className="border-gray-300 rounded px-3 py-2">
              <option>Popularity</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Filter
            </button>
          </div>
        </div>
      </main>

      {/* Brand Logos Section */}
     <section className="py-8 sm:py-12 lg:py-16 text-center bg-gray-100 px-4 sm:px-12 lg:px-[195px]">
            <h2 className="text-[28px] sm:text-[50px] font-bold mb-6 sm:mb-8 text-[#252B42]">
              Big Companies Are Here
            </h2>
            <p className="text-[#737373] mb-8 sm:mb-12">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {["logo1", "logo2", "logo3", "logo4", "logo5"].map((logo, index) => (
                <div key={index} className="h-12 flex items-center justify-center">
                  <Image
                    src={`/${logo}.png`}
                    alt={logo}
                    className=""
                    width={76}
                    height={72}
                  />
                </div>
              ))}
            </div>
          </section>
      <Footer/>

{/*     
       <section className="px-4 sm:px-8 lg:px-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex flex-col items-center justify-center"
            >
              <div className="relative h-40 sm:h-48 md:h-56 mb-6 flex items-center justify-center ">
              
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg">
                  New
                </div>
                <Image
                  src={`/shop${index + 1}.png`}
                  alt={`shop ${index + 1}`}
                  // objectFit="cover"
                  className="rounded"
                  width={225}
                  height={180}
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold ">
                Graphic Design
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                English Department
              </p>
              <div className="mt-2">
                <span className="text-gray-500 line-through text-xs sm:text-sm mr-2">
                  $16.48
                </span>
                <span className="text-green-600 font-bold text-sm sm:text-base">
                  $6.48
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-3">
                {Array.from({ length: 4 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-3 w-3 rounded-full ${
                      dotIndex % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>  */}
       {/* <ShopPro/> */}
       <section className="px-4 sm:px-8 lg:px-16 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {res.map((item:Product, index:number) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 flex flex-col items-center justify-center"
          >
            <div className="relative h-40 sm:h-48 md:h-56 mb-6 flex items-center justify-center">
              {/* Ribbon/Banner */}
              <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg">
                New
              </div>
              <Link href={`/shopproduct/id?cardSecBanner=${item.cardSecBanner}&cardSectionSmallH=${item.cardSectionSmallH}&cardSectionHeading=${item.cardSectionHeading}&cardSectionOldPrice=${item.cardSectionOldPrice}&cardSectionNewPrice=${item.cardSectionNewPrice}&cardSecImg=${item.cardSecImg}`}>
                <Image
                  src={item.cardSecImg}
                  alt={`shop ${index + 1}`}
                  //   objectFit="cover"
                  className="rounded"
                  width={225}
                  height={180}
                />
              </Link>
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-4">
              {item.cardSectionHeading}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {item.cardSectionSmallH}
            </p>
            <div className="mt-2">
              <span className="text-gray-500 line-through text-xs sm:text-sm mr-2">
                ${item.cardSectionOldPrice}
              </span>
              <span className="text-green-600 font-bold text-sm sm:text-base">
                ${item.cardSectionNewPrice}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-3">
              {Array.from({ length: 4 }).map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`h-3 w-3 rounded-full ${dotIndex % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                    }`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
































      
    </div>
  );
}
