
import Shopa from "@/components/chev";
import Footer from "@/components/footer";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";


export default async function Shopss(){
   const res = await client.fetch(
      "*[_type == 'shopProductPage'][0].sections[0]{'shopCardsHeading': shopCardsHeading, cards[]{'shopCardsImg': shopCardsImg.asset->url, 'shopCardsHeading': shopCardsHeading, 'shopCardsSmallH': shopCardsSmallH, 'shopCardsOldPrice': shopCardsOldPrice, 'shopCardsNewPrice': shopCardsNewPrice}}"
    );
    interface Product {
          shopCardsHeading: string;
          shopCardsImg: string;
          shopCardsSmallH: string;
          shopCardsNewPrice: number;
          shopCardsOldPrice: number;
        }
  
    const products = [
        { id: 1, Image: "/din1.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
        { id: 2, Image: "/din2.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
        { id: 3, Image: "/din3.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
        { id: 4, Image: "/din4.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
        { id: 5, Image: "/din5.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
        { id: 6, Image: "/din6.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
        { id: 7, Image: "/din7.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
        { id: 8, Image: "/din2.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
      ];
    return(
        <>
        <Shopa/>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-[195px] pt-[60px]">
  {/* Left Image Slider */}
  <div>
    <div className="relative">
      <Image
        src="/homep.jpg"
        alt="Product"
        width={600}
        height={400}
        className="w-full rounded-lg object-cover"
      />
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        &#8592;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        &#8594;
      </button>
    </div>
    <div className="flex gap-2 mt-4">
      <Image
        src="/thum1.png"
        alt="Thumbnail 1"
        width={64}
        height={64}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <Image
        src="/thum2.jpg"
        alt="Thumbnail2"
        width={64}
        height={64}
        className="w-16 h-16 rounded-lg object-cover"
      />
    </div>
  </div>

  {/* Right Details */}
  <div>
    <h2 className="text-2xl font-semibold mb-2 text-[#252B42] text-[20px] leading-[30px] text-center md:text-left">
      Floating Phone
    </h2>
    <p className="text-xl text-gray-800 font-bold mb-2 text-center md:text-left">
      $1,139.33
    </p>
    <p className="text-green-600 mb-2 text-center md:text-left">
      Availability: <span>In Stock</span>
    </p>
    <p className="text-gray-600 mb-4 text-[14px] leading-[20px] text-center md:text-left">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
    </p>
    <div className="flex justify-center md:justify-start gap-2 mb-4">
      <button className="w-8 h-8 rounded-full bg-green-500"></button>
      <button className="w-8 h-8 rounded-full bg-blue-500"></button>
      <button className="w-8 h-8 rounded-full bg-orange-500"></button>
    </div>
    <div className="flex justify-center md:justify-start">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Select Options
      </button>
    </div>
  </div>
</section>

       

    {/* bottom section */}
    <section className="container mx-auto px-4 sm:px-8 lg:px-[195px] pt-[25px] pb-[35px]">
  {/* Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Left Side: Image */}
    <div className="w-full h-auto">
      <Image
        src="/bottom.png"
        alt="Interior Design"
        width={600}
        height={500}
        className="rounded-lg w-full h-auto object-cover"
      />
    </div>

    {/* Right Side: Content */}
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Left Column: Met minim Mollie */}
      <div className="space-y-4 sm:space-y-6">
        <h4 className="font-bold text-gray-800 text-lg text-center sm:text-left">
          the quick fox jumps over
        </h4>
        <p className="text-gray-600 leading-relaxed text-center sm:text-left">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent,
          RELIT official consequat ENIM Mollie. Excitation venial consequat sent nostrum met.
        </p>
        <p className="text-gray-600 leading-relaxed text-center sm:text-left">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent,
          RELIT official consequat ENIM Mollie. Excitation venial consequat sent nostrum met.
        </p>
      </div>

      {/* Right Column: The quick fox jumps over */}
      <div className="space-y-6">
        <p className="font-bold text-gray-800 text-center sm:text-left">
          the quick fox jumps over
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 text-center sm:text-left">
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
        </ul>
        <p className="font-bold text-gray-800 mt-6 text-center sm:text-left">
          the quick fox jumps over
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 text-center sm:text-left">
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* 
        {/* seller */}
        {/* <div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
              
              <div className="text-center mb-10">
               
                <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px]  font-bold text-[35px] leading-[40px]">
                  Bestseller Products
                </h1>
              
              </div>
        
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {products.map((product) => (
                  <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                  
                    <div className="w-full h-[300px] relative">
                      <Image
                        className="object-contain h-full w-full"
                        src={product.Image}
                        alt={product.title}
                        fill
                      />
                    </div>
        
                  
                    <div className="p-4 flex-1 flex flex-col justify-between text-center">
                      <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">{product.department}</p>
                      <div className="text-gray-500 text-sm mb-4">
                        <span className="line-through">{product.oldPrice}</span>
                        <span className="text-green-500 font-bold ml-2">{product.newPrice}</span>
                      </div>
                      <div className="flex justify-center gap-2">
                        {product.colors.map((color, index) => (
                          <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>  */} 














<div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px] font-bold text-[35px] leading-[40px]">
          {res?.shopCardsHeading || "Our Products"}
        </h1>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(res.cards || []).map((product: Product, index: number) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-[300px] relative">
              <Link
                href={`/shopsec/slug?shopCardsImg=${product.shopCardsImg}&shopCardsHeading=${product.shopCardsHeading}&shopCardsSmallH=${product.shopCardsSmallH}&shopCardsNewPrice=${product.shopCardsNewPrice}&shopCardsOldPrice=${product.shopCardsOldPrice}`}
              >
                <Image
                  className="object-contain h-full w-full"
                  src={product.shopCardsImg}
                  alt={product.shopCardsHeading}
                  fill
                />
              </Link>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.shopCardsHeading}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{product.shopCardsSmallH}</p>
              <div className="text-gray-500 text-sm mb-4">
                <span className="line-through">{product.shopCardsOldPrice}</span>
                <span className="text-green-500 font-bold ml-2">{product.shopCardsNewPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>











            {/* <ShopsSec/> */}

            {/* logos */}
             {/* Logos Section */}
             <section className="bg-gray-50 px-6 md:px-[195px] pt-[50px] pb-[50px]">
  <div className="text-center mb-8">
    <h3 className="text-gray-600 text-lg font-medium">Trusted By Over 4000 Big Companies</h3>
  </div>
  <div className="flex flex-wrap justify-center items-center gap-8">
    {/* Logos */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
      <Image src="/logo1.png" alt="Hooli Logo" width={80} height={14} className="mx-auto" />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
      <Image src="/logo2.png" alt="Lyft Logo" width={70} height={38} className="mx-auto" />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
      <Image src="/logo3.png" alt="Leaf Logo" width={80} height={54} className="mx-auto" />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
      <Image src="/logo4.png" alt="Stripe Logo" width={80} height={50} className="mx-auto" />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
      <Image src="/logo5.png" alt="AWS Logo" width={80} height={41} className="mx-auto" />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
      <Image src="/logo6.png" alt="Reddit Logo" width={55} height={51} className="mx-auto" />
    </div>
  </div>
</section>

                        <Footer/>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
}