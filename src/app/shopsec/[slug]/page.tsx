
// import Shopa from "@/components/chev";
// import Footer from "@/components/footer";
// import Image from "next/image";

// export default async function Product({
//   searchParams,
// }: {
//   searchParams: Promise<{
  
//   import Shopa from "@/components/chev";
//   import Footer from "@/components/footer";
//   import Image from "next/image";
  
//   export default async function Product({
//     searchParams,
//   }: {
//     searchParams: Promise<{
//       cardSecImg: string;
//       cardSectionHeading: string;
//       cardSecBanner: string;
//       cardSectionSmallH: string;
//       cardSectionOldPrice: number;
//       cardSectionNewPrice: number;
//     }>;
//   }) {
//     const {
//       cardSecImg,
//       cardSectionHeading,
//       cardSecBanner,
//       cardSectionNewPrice,
//       cardSectionOldPrice,
//       cardSectionSmallH,
//     } = await searchParams;
  
//     return (
//       <>
//         {/* <Header/> */}
//         <Shopa />
//         <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-[140px] pt-[60px] mb-12">
//           {/* Left Image Slider */}
//           <div>
//             <div className="relative rounded-lg overflow-hidden">
//               <div className="absolute top-2 left-2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-tr-lg">
//                 {cardSecBanner}
//               </div>
//               <Image
//                 src={cardSecImg}
//                 alt={cardSecImg}
//                 width={450}
//                 height={450}
//                 className="rounded-lg object-contain border border-gray-200"
//               />
//             </div>
//           </div>
  
//           {/* Right Details */}
//           <div>
//             <h2 className="text-4xl font-extrabold font-sans mb-6 text-[#252B42] text-center md:text-left leading-snug tracking-tight">
//               {cardSectionHeading}
//             </h2>
//             <p className="text-lg text-gray-600 font-serif mb-6 text-center md:text-left leading-relaxed">
//               {cardSectionSmallH}
//             </p>
//             <div className="flex items-center justify-center md:justify-start mb-6 space-x-4">
//               <span className="text-gray-500 line-through text-xl">
//                 ${cardSectionOldPrice}
//               </span>
//               <span className="text-green-700 font-bold text-3xl">
//                 ${cardSectionNewPrice}
//               </span>
//             </div>
//             <p className="text-lg text-green-700 mb-6 text-center md:text-left font-medium">
//               Availability: In Stock
//             </p>
//             <div className="flex items-center justify-center md:justify-start space-x-4 mt-4 mb-10">
//               {Array.from({ length: 4 }).map((_, dotIndex) => (
//                 <span
//                   key={dotIndex}
//                   className={`h-5 w-5 rounded-full ${
//                     dotIndex % 2 === 0 ? "bg-blue-600" : "bg-green-600"
//                   }`}
//                 ></span>
//               ))}
//             </div>
//             <div className="flex justify-center md:justify-start">
//               <button className="bg-[#23856D] text-white px-12 py-4 rounded-lg hover:bg-[#1E6B58] transition-all">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </>
//     );
//   }
  
//   }>;
// }) {
//   const {
//     cardSecImg,
//     cardSectionHeading,
//     cardSecBanner,
//     cardSectionNewPrice,
//     cardSectionOldPrice,
//     cardSectionSmallH,
//   } = await searchParams;

//   return (
//     <>
//       {/* <Header/> */}
//       <Shopa />
//       <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-[140px] pt-[60px] mb-12">
//         {/* Left Image Slider */}
//         <div>
//           <div className="relative rounded-lg overflow-hidden">
//             <div className="absolute top-2 left-2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-tr-lg">
//               {cardSecBanner}
//             </div>
//             <Image
//               src={cardSecImg}
//               alt={cardSecImg}
//               width={450}
//               height={450}
//               className="rounded-lg object-contain border border-gray-200"
//             />
//           </div>
//         </div>

//         {/* Right Details */}
//         <div>
//           <h2 className="text-4xl font-extrabold font-sans mb-6 text-[#252B42] text-center md:text-left leading-snug tracking-tight">
//             {cardSectionHeading}
//           </h2>
//           <p className="text-lg text-gray-600 font-serif mb-6 text-center md:text-left leading-relaxed">
//             {cardSectionSmallH}
//           </p>
//           <div className="flex items-center justify-center md:justify-start mb-6 space-x-4">
//             <span className="text-gray-500 line-through text-xl">
//               ${cardSectionOldPrice}
//             </span>
//             <span className="text-green-700 font-bold text-3xl">
//               ${cardSectionNewPrice}
//             </span>
//           </div>
//           <p className="text-lg text-green-700 mb-6 text-center md:text-left font-medium">
//             Availability: In Stock
//           </p>
//           <div className="flex items-center justify-center md:justify-start space-x-4 mt-4 mb-10">
//             {Array.from({ length: 4 }).map((_, dotIndex) => (
//               <span
//                 key={dotIndex}
//                 className={`h-5 w-5 rounded-full ${
//                   dotIndex % 2 === 0 ? "bg-blue-600" : "bg-green-600"
//                 }`}
//               ></span>
//             ))}
//           </div>
//           <div className="flex justify-center md:justify-start">
//             <button className="bg-[#23856D] text-white px-12 py-4 rounded-lg hover:bg-[#1E6B58] transition-all">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


















// import ShoppingCart from "@/app/cart/page";
// import Shopa from "@/components/chev";
// import Footer from "@/components/footer";
// import { Link } from "lucide-react";
// import Image from "next/image";

// export default async function Product({
//   searchParams,
// }: {
//   searchParams: Promise<{
//     shopCardsHeading: string;
//     shopCardsImg: string;
//     shopCardsSmallH: string;
//     shopCardsNewPrice: number;
//     shopCardsOldPrice: number;
//   }>;
// }) {
//   const {
//    shopCardsHeading,
//    shopCardsImg,
//    shopCardsSmallH,
//    shopCardsNewPrice,
//    shopCardsOldPrice
//   } = await searchParams;

//   return (
//     <>
//       {/* <Header/> */}
//       <Shopa />
//       <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-[140px] pt-[60px] mb-12">
//         {/* Left Image Slider */}
//         <div>
//           <div className="relative rounded-lg overflow-hidden">
//             {/* <div className="absolute top-2 left-2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-tr-lg">
//               {cardSecBanner}
//             </div> */}
//             <Image
//               src={shopCardsImg}
//               alt={shopCardsImg}
//               width={450}
//               height={450}
//               className="rounded-lg object-contain border border-gray-200"
//             />
//           </div>
//         </div>

//         {/* Right Details */}
//         <div>
//           <h2 className="text-4xl font-extrabold font-sans mb-6 text-[#252B42] text-center md:text-left leading-snug tracking-tight">
//             {shopCardsHeading}
//           </h2>
//           <p className="text-lg text-gray-600 font-serif mb-6 text-center md:text-left leading-relaxed">
//             {shopCardsSmallH}
//           </p>
//           <div className="flex items-center justify-center md:justify-start mb-6 space-x-4">
//             <span className="text-gray-500 line-through text-xl">
//               ${shopCardsOldPrice}
//             </span>
//             <span className="text-green-700 font-bold text-3xl">
//               ${shopCardsNewPrice}
//             </span>
//           </div>
//           <p className="text-lg text-green-700 mb-6 text-center md:text-left font-medium">
//             Availability: In Stock
//           </p>
//           <div className="flex items-center justify-center md:justify-start space-x-4 mt-4 mb-10">
//             {Array.from({ length: 4 }).map((_, dotIndex) => (
//               <span
//                 key={dotIndex}
//                 className={`h-5 w-5 rounded-full ${
//                   dotIndex % 2 === 0 ? "bg-blue-600" : "bg-green-600"
//                 }`}
//               ></span>
//             ))}
//           </div>
//           <div className="flex justify-center md:justify-start">
//             <Link href={`/cart?shopCardsHeading=${shopCardsHeading}&shopCardsImg=${shopCardsImg}shopCardsSmallH=${shopCardsSmallH}&shopCardsNewPrice=${shopCardsNewPrice}`}>
//             <button className="bg-[#23856D] text-white px-12 py-4 rounded-lg hover:bg-[#1E6B58] transition-all">
//               <ShoppingCart/>
//               Add to Cart
//             </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }













import ShoppingCart from "@/app/cart/page";
import Shopa from "@/components/chev";
import Footer from "@/components/footer";
import { Link } from "lucide-react";
import Image from "next/image";

export default async function Product({
  searchParams,
}: {
  searchParams: Promise<{
    shopCardsHeading: string;
    shopCardsImg: string;
    shopCardsSmallH: string;
    shopCardsNewPrice: number;
    shopCardsOldPrice: number;
  }>;
}) {
  const {
    shopCardsHeading,
    shopCardsImg,
    shopCardsSmallH,
    shopCardsNewPrice,
    shopCardsOldPrice,
  } = await searchParams;

  if (
    !shopCardsHeading ||
    !shopCardsImg ||
    !shopCardsSmallH ||
    !shopCardsNewPrice ||
    !shopCardsOldPrice
  ) {
    return null; // Return null or loading state if data is missing
  }

  return (
    <>
      <Shopa />
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-[140px] pt-[60px] mb-12">
        {/* Left Image Slider */}
        <div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={shopCardsImg}
              alt={shopCardsImg}
              width={450}
              height={450}
              className="rounded-lg object-contain border border-gray-200"
            />
          </div>
        </div>

        {/* Right Details */}
        <div>
          <h2 className="text-4xl font-extrabold font-sans mb-6 text-[#252B42] text-center md:text-left leading-snug tracking-tight">
            {shopCardsHeading}
          </h2>
          <p className="text-lg text-gray-600 font-serif mb-6 text-center md:text-left leading-relaxed">
            {shopCardsSmallH}
          </p>
          <div className="flex items-center justify-center md:justify-start mb-6 space-x-4">
            <span className="text-gray-500 line-through text-xl">
              ${shopCardsOldPrice}
            </span>
            <span className="text-green-700 font-bold text-3xl">
              ${shopCardsNewPrice}
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
           
              <button className="bg-[#23856D] text-white px-12 py-4 rounded-lg hover:bg-[#1E6B58] transition-all flex items-center space-x-2">
               
              Add to Cart
              </button>
           
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


