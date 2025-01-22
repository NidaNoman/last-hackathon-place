// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// export default async function ShopsSec(){

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

//     const products = [
//         { id: 1, Image: "/din1.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//         { id: 2, Image: "/din2.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//         { id: 3, Image: "/din3.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//         { id: 4, Image: "/din4.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//         { id: 5, Image: "/din5.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//         { id: 6, Image: "/din6.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//         { id: 7, Image: "/din7.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//         { id: 8, Image: "/din2.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//       ];

//      const res = await client.fetch("*[_type == 'shopProductPage'][0].sections[0]{'shopCardsHeading': shopCardsHeading,cards[0]{'shopCardsImg': shopCardsImg.asset->url,'shopCardsHeading' : shopCardsHeading,'shopCardsSmallH' : shopCardsSmallH,'shopCardsOldPrice' : shopCardsOldPrice,'shopCardsNewPrice' : shopCardsNewPrice, }}")

//      interface Product{
//       shopCardsHeading  : string;
//       shopCardsImg : string ;
//       shopCardsSmallH : string;
//       shopCardsNewPrice : number;
//       shopCardsOldPrice  : number;

//     return(
//       <>

//          <div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
//                       {/* Header Section */}
//                       <div className="text-center mb-10">

//                         <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px]  font-bold text-[35px] leading-[40px]">
//                           Bestseller Products
//                         </h1>

//                       </div>

//                       {/* Product Grid Section */}
//                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//                         {products.map((product) => (
//                           <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
//                             {/* Product Image */}
//                             <div className="w-full h-[300px] relative">
//                                 <Link href={`/shopsec/slug?`}>
//                               <Image
//                                 className="object-contain h-full w-full"
//                                 src={product.Image}
//                                 alt={product.title}
//                                 fill
//                               />
//                               </Link>
//                             </div>

//                             {/* Product Details */}
//                             <div className="p-4 flex-1 flex flex-col justify-between text-center">
//                               <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
//                               <p className="text-gray-500 text-sm mb-2">{product.department}</p>
//                               <div className="text-gray-500 text-sm mb-4">
//                                 <span className="line-through">{product.oldPrice}</span>
//                                 <span className="text-green-500 font-bold ml-2">{product.newPrice}</span>
//                               </div>
//                                <div className="flex justify-center gap-2">
//                                 {product.colors.map((color, index) => (
//                                   <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                     </div>
//                     </>

//     )

// }


// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";

// export default async function ShopsSec() {
//   const products = [
//     {
//       id: 1,
//       Image: "/din1.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//     {
//       id: 2,
//       Image: "/din2.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//     {
//       id: 3,
//       Image: "/din3.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//     {
//       id: 4,
//       Image: "/din4.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//     {
//       id: 5,
//       Image: "/din5.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//     {
//       id: 6,
//       Image: "/din6.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//     {
//       id: 7,
//       Image: "/din7.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//     {
//       id: 8,
//       Image: "/din2.png",
//       title: "Graphic Design",
//       department: "English Department",
//       oldPrice: "$16.48",
//       newPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
//     },
//   ];

//   const res = await client.fetch(
//     "*[_type == 'shopProductPage'][0].sections[0]{'shopCardsHeading': shopCardsHeading,cards[0]{'shopCardsImg': shopCardsImg.asset->url,'shopCardsHeadings' : shopCardsHeadings,'shopCardsSmallH' : shopCardsSmallH,'shopCardsOldPrice' : shopCardsOldPrice,'shopCardsNewPrice' : shopCardsNewPrice, }}"
//   );

//   interface Product {
//     shopCardsHeading: string;
//     shopCardsHeadings: string;
//     shopCardsImg: string;
//     shopCardsSmallH: string;
//     shopCardsNewPrice: number;
//     shopCardsOldPrice: number;
//   }

//   return (
//     <>
//       <div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px] font-bold text-[35px] leading-[40px]">
//           {res.shopCardsHeading}
//           </h1>
//         </div>

//         {/* Product Grid Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {(res.cards).map((product: Product, index: number) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
//             >
//               {/* Product Image */}
//               <div className="w-full h-[300px] relative">
//                 <Link
//                   href={`/shopsec/slug?shopCardsImg=${product.shopCardsImg}&shopCardsHeadings=${product.shopCardsHeadings}&shopCardsSmallH=${product.shopCardsSmallH}&shopCardsNewPrice=${product.shopCardsNewPrice}&shopCardsOldPrice=${product.shopCardsOldPrice}`}
//                 >
//                   <Image
//                     className="object-contain h-full w-full"
//                     src={product.shopCardsImg}
//                     alt={product.shopCardsImg}
//                     fill
//                   />
//                 </Link>
//               </div>

//               {/* Product Details */}
//               <div className="p-4 flex-1 flex flex-col justify-between text-center">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {product.shopCardsHeadings}
//                 </h3>
//                 <p className="text-gray-500 text-sm mb-2">
//                   {product.shopCardsSmallH}
//                 </p>
//                 <div className="text-gray-500 text-sm mb-4">
//                   <span className="line-through">
//                     {product.shopCardsOldPrice}
//                   </span>
//                   <span className="text-green-500 font-bold ml-2">
//                     {product.shopCardsNewPrice}
//                   </span>
//                 </div>
//                 {/* <div className="flex justify-center gap-2">
//                   {product.colors.map((color:, index) => (
//                     <span
//                       key={index}
//                       className={`w-4 h-4 rounded-full ${color}`}
//                     ></span>
//                   ))}
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }











// export default async function ShopsSec() {
//   const res = await client.fetch(
//     "*[_type == 'shopProductPage'][0].sections[0]{'shopCardsHeading': shopCardsHeading, cards[]{'shopCardsImg': shopCardsImg.asset->url, 'shopCardsHeading': shopCardsHeading, 'shopCardsSmallH': shopCardsSmallH, 'shopCardsOldPrice': shopCardsOldPrice, 'shopCardsNewPrice': shopCardsNewPrice}}"
//   );
//   interface Product {
//         shopCardsHeading: string;
//         shopCardsImg: string;
//         shopCardsSmallH: string;
//         shopCardsNewPrice: number;
//         shopCardsOldPrice: number;
//       }



//   return (
//     <div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px] font-bold text-[35px] leading-[40px]">
//           {res?.shopCardsHeading || "Our Products"}
//         </h1>
//       </div>

//       {/* Product Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {(res.cards || []).map((product: Product, index: number) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
//             <div className="w-full h-[300px] relative">
//               <Link
//                 href={`/shopsec/slug?shopCardsImg=${product.shopCardsImg}&shopCardsHeading=${product.shopCardsHeading}&shopCardsSmallH=${product.shopCardsSmallH}&shopCardsNewPrice=${product.shopCardsNewPrice}&shopCardsOldPrice=${product.shopCardsOldPrice}`}
//               >
//                 <Image
//                   className="object-contain h-full w-full"
//                   src={product.shopCardsImg}
//                   alt={product.shopCardsHeading}
//                   fill
//                 />
//               </Link>
//             </div>
//             <div className="p-4 flex-1 flex flex-col justify-between text-center">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {product.shopCardsHeading}
//               </h3>
//               <p className="text-gray-500 text-sm mb-2">{product.shopCardsSmallH}</p>
//               <div className="text-gray-500 text-sm mb-4">
//                 <span className="line-through">{product.shopCardsOldPrice}</span>
//                 <span className="text-green-500 font-bold ml-2">{product.shopCardsNewPrice}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
