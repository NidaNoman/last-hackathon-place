
// import Shopa from "@/components/chev";
// import Footer from "@/components/footer";
// import Image from "next/image";



// export default async function Product(

//   return (
//     <>
//     {/* <Header/> */}
//       <Shopa/>
//     <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 px-4 sm:px-8 lg:px-[195px] pt-[60px] mb-10">
//       {/* Left Image Slider */}
       
    
//       <div>
     

//         <div className="relative">
//         <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg">
//         {cardSecBanner}
//         </div>
//           <Image
//             src={cardSecImg}
//             alt={cardSecImg}
//             width={300}
//             height={300}
//             className=" rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Right Details */}
//       <div>
//         <h2 className="text-2xl font-bold font-sans mb-4 text-[#252B42] text-[40px] leading-[40px] text-center md:text-left">
//         {cardSectionHeading} 
//         </h2>
//         <p className="  text-gray-500 text-[20px] font-serif">
//               {cardSectionSmallH}
//             </p>
//         <div className="mt-2">
//               <span className="text-gray-500 line-through text-xs sm:text-sm mr-2 text-[25px] ">
//                 ${cardSectionOldPrice}
//               </span>
//               <span className="text-green-600 font-bold text-sm sm:text-base text-[25px]">
//                 ${cardSectionNewPrice}
//               </span>
//             </div>
//         <p className="text-xl text-gray-800 font-bold mb-4 text-center md:text-left ">
//           {/* ${cardSectionPrice}  */}
//         </p>
//         <p className="text-green-600 mb-4 text-center md:text-left font-sans text-[20px] leading-[20px]">
//           Availability: In Stock
//         </p>
//         {/* <p className="text-gray-600 mb-6 text-[14px] leading-[20px] text-center md:text-left">
//           Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
//         </p> */}
//          <div className="flex items-center  space-x-2 mt-3">
//               {Array.from({ length: 4 }).map((_, dotIndex) => (
//                 <span
//                   key={dotIndex}
//                   className={`h-3 w-3 rounded-full ${dotIndex % 2 === 0 ? "bg-blue-500" : "bg-green-500"
//                     }`}
//                 ></span>
//               ))}
//             </div>
//         <div className="flex md:justify-start mb-4 ">
//           <button className="bg-[#23856D] text-white px-8 py-2  mt-4 rounded hover:bg-[#23857D]">
//             Add Cart 
//           </button>
//         </div>
//       </div>
//     </section>
//     <Footer/> 
//     </>
//   );
// }







import Shopa from "@/components/chev";
import Footer from "@/components/footer";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Product({
  searchParams,
}: {
  searchParams: Promise<{
    cardSecImg: string;
    cardSectionHeading: string;
    cardSecBanner: string;
    cardSectionSmallH: string;
    cardSectionOldPrice: number;
    cardSectionNewPrice: number;
  }>;
}) {
  const {
    cardSecImg,
    cardSectionHeading,
    cardSecBanner,
    cardSectionNewPrice,
    cardSectionOldPrice,
    cardSectionSmallH,
  } = await searchParams;

  return (
    <>
      {/* <Header/> */}
      <Shopa />
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-[140px] pt-[60px] mb-12">
        {/* Left Image Slider */}
        <div>
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute top-2 left-2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-tr-lg">
              {cardSecBanner}
            </div>
            <Image
              src={cardSecImg}
              alt={cardSecImg}
              width={450}
              height={450}
              className="rounded-lg object-contain border border-gray-200"
            />
          </div>
        </div>

        {/* Right Details */}
        <div>
          <h2 className="text-4xl font-extrabold font-sans mb-6 text-[#252B42] text-center md:text-left leading-snug tracking-tight">
            {cardSectionHeading}
          </h2>
          <p className="text-lg text-gray-600 font-serif mb-6 text-center md:text-left leading-relaxed">
            {cardSectionSmallH}
          </p>
          <div className="flex items-center justify-center md:justify-start mb-6 space-x-4">
            <span className="text-gray-500 line-through text-xl">
              ${cardSectionOldPrice}
            </span>
            <span className="text-green-700 font-bold text-3xl">
              ${cardSectionNewPrice}
            </span>
          </div>
          <p className="text-lg text-green-700 mb-6 text-center md:text-left font-medium">
            Availability: In Stock
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-4 mb-10">
            {Array.from({ length: 4 }).map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`h-5 w-5 rounded-full ${
                  dotIndex % 2 === 0 ? "bg-blue-600" : "bg-green-600"
                }`}
              ></span>
            ))}
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href={`/cart?cardSecImg=${cardSecImg}&cardSectionHeading=${cardSectionHeading}&cardSectionNewPrice=${cardSectionNewPrice}&cardSectionSmallH=${cardSectionSmallH}`}>
            <button className="bg-[#23856D] text-white px-12 py-4 rounded-lg hover:bg-[#1E6B58] transition-all">
              Add to Cart
            </button>
            </Link>
          </div>


          <div className="flex justify-center md:justify-start mt-6">
            <Link href={`/wishlist?cardSecImg=${cardSecImg}&cardSectionHeading=${cardSectionHeading}&cardSectionNewPrice=${cardSectionNewPrice}&cardSectionSmallH=${cardSectionSmallH}`}>
            <button className="bg-[#23856D] text-white px-12 py-4 rounded-lg hover:bg-[#1E6B58] transition-all">
            <Heart className="w-5 h-5" /> 
            </button>
            </Link>
          </div>
          







        </div>
      </section>
      <Footer />
    </>
  );
}
