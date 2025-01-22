
// import { client } from "@/sanity/lib/client";
// import Image  from "next/image";
// export default async function BestsellerProducts() {
//   // Data for 8 products
//   const products = [
//     { id: 1, Image: "/pro1.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//     { id: 2, Image: "/pro2.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//     { id: 3, Image: "/pro3.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//     { id: 4, Image: "/pro4.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//     { id: 5, Image: "/pro5.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//     { id: 6, Image: "/pro6.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//     { id: 7, Image: "/pro7.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//     { id: 8, Image: "/pro8.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
//   ];

//  const res = await client.fetch("*[_type == 'landingPage'][0].sections[1]{'cardSectionHeading':cardSectionHeading,'cardSectionPara':cardSectionPara,'cardSectionParagraph':cardSectionParagraph,'cards':cards[]{'cardSecImg':cardSecImg.asset->url,'cardSectionHeading':cardSectionHeading,'cardSectionSubHeading':cardSectionSubHeading,'cardSectionPrice':cardSectionPrice,}}")







//   return (
//     <div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <p className="text-[#737373] font-medium uppercase text-base md:text-lg leading-[30px] mb-4">
//           {res.cardSectionPara}
//         </p>
//         <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px] leading-tight font-bold">
//           {res.cardSectionHeading}
//         </h1>
//         <p className="text-[#737373] text-sm md:text-base leading-[20px]">
//           {res.cardSectionParagraph}
//         </p>
//       </div>

//       {/* Product Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {(res.cards).map((product:any, index:number) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
//             {/* Product Image */}
//             <div className="w-full h-[300px] relative">
//               <Image
//                 className="object-contain h-full w-full"
//                 src={res.cards[index].cardSecImg}
//                 alt={product.title}
//                 fill
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4 flex-1 flex flex-col justify-between text-center">
//               <h3 className="text-lg font-semibold text-gray-900">{res.cards[index].cardSectionHeading}</h3>
//               <p className="text-gray-500 text-sm mb-2">{res.cards[index].cardSectionSubHeading}</p>
//               <div className="text-gray-500 text-sm mb-4">
//                 <span className="line-through">{product.oldPrice}</span>
//                 <span className="text-green-500 font-bold ml-2">${res.cards[index].cardSectionPrice}</span>
//               </div>
//             {/* <div className="flex justify-center gap-2">
//                 {product.colors.map((color:any, index:any) => (
//                   <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
//                 ))}
//               </div>  */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








import { client } from "@/sanity/lib/client";
import Image  from "next/image";
import Link from "next/link";
export default async function BestsellerProducts() {
  // Data for 8 products
  const products = [
    { id: 1, Image: "/pro1.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 2, Image: "/pro2.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 3, Image: "/pro3.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 4, Image: "/pro4.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 5, Image: "/pro5.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 6, Image: "/pro6.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 7, Image: "/pro7.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 8, Image: "/pro8.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
  ];

  interface ProductCard{

    cardSecImg : string;
    cardSectionHeading : string;
    cardSectionSubHeading: string;
    cardSectionPrice : string; 
  }

 const res = await client.fetch("*[_type == 'landingPage'][0].sections[1]{'cardSectionHeading':cardSectionHeading,'cardSectionPara':cardSectionPara,'cardSectionParagraph':cardSectionParagraph,'cards':cards[]{'cardSecImg':cardSecImg.asset->url,'cardSectionHeading':cardSectionHeading,'cardSectionSubHeading':cardSectionSubHeading,'cardSectionPrice':cardSectionPrice,}}")







  return (
    <div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-[#737373] font-medium uppercase text-base md:text-lg leading-[30px] mb-4">
          {res.cardSectionPara}
        </p>
        <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px] leading-tight font-bold">
          {res.cardSectionHeading}
        </h1>
        <p className="text-[#737373] text-sm md:text-base leading-[20px]">
          {res.cardSectionParagraph}
        </p>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(res.cards).map((item:ProductCard, index:number) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            {/* Product Image */}
            <div className="w-full h-[300px] relative">
              <Link href={`/products/id?cardSecImg=${item.cardSecImg}&cardSectionHeading=${item.cardSectionHeading}&cardSectionSubHeading=${item.cardSectionSubHeading}&cardSectionPrice=${item.cardSectionPrice}`}>
              <Image
                className="object-contain h-full w-full"
                src={item.cardSecImg}
                alt={item.cardSecImg}
                fill
              /></Link>
            </div>

            {/* Product Details */}
            <div className="p-4 flex-1 flex flex-col justify-between text-center">
              <h3 className="text-lg font-semibold text-gray-900">{item.cardSectionHeading}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.cardSectionSubHeading}</p>
              <div className="text-gray-500 text-sm mb-4">
                {/* <span className="line-through">{item.oldPrice}</span> */}
                <span className="text-green-500 font-bold ml-2">{item.cardSectionPrice}</span>
              </div>
            {/* <div className="flex justify-center gap-2">
                {product.colors.map((color:any, index:any) => (
                  <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                ))}
              </div>  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
