
import Shopa from "@/components/chev";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";



export default async function Product({searchParams,
} : {
    searchParams :  Promise<{
    cardSecImg : string;
    cardSectionHeading : string;
    cardSectionPrice : string;
  }>;
}) {

  const {cardSecImg,cardSectionHeading, cardSectionPrice} = await searchParams;

  return (
    <>
    {/* <Header/> */}
      <Shopa/>
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-8 lg:px-[195px] pt-[60px] mb-10">
      {/* Left Image Slider */}
       
    
      <div>

        <div className="relative">
          <Image
            src={cardSecImg}
            alt={cardSecImg}
            width={300}
            height={300}
            className=" rounded-lg"
          />
        </div>
      </div>

      {/* Right Details */}
      <div>
        <h2 className="text-2xl font-bold font-sans mb-4 text-[#252B42] text-[40px] leading-[40px] text-center md:text-left">
        {cardSectionHeading} 
        </h2>
        <p className="text-xl text-gray-800 font-bold mb-4 text-center md:text-left ">
          ${cardSectionPrice} 
        </p>
        <p className="text-green-600 mb-4 text-center md:text-left font-sans">
          Availability: In Stock
        </p>
        {/* <p className="text-gray-600 mb-6 text-[14px] leading-[20px] text-center md:text-left">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p> */}
        <div className="flex justify-center md:justify-start gap-2 mb-4">
          <button className="w-8 h-8 rounded-full bg-green-500"></button>
          <button className="w-8 h-8 rounded-full bg-blue-500"></button>
          <button className="w-8 h-8 rounded-full bg-orange-500"></button>
        </div>
        
        <div className="flex justify-center md:justify-start">
       
          <button className="bg-[#23856D] text-white px-8 py-2  mt-4 rounded hover:bg-[#23857D]">
            
            Add Cart 
           
        
          </button>
    
          
        </div>
        
      </div>
    </section>
    <Footer/> 
    </>
  );
}
