
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
export default  async function ShopPro() {

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
  <>
    {/* Product Grid Section */}
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





</>
)
}



