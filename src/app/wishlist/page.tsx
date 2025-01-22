// import Image from "next/image";




// // "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash } from "lucide-react";

// import { useRouter, useSearchParams } from "next/navigation";
// import Header from "@/components/header";
// import Footer from "@/components/footer";


// interface IProduct {
//   cardSecImg: string,
//   cardSectionHeading : string;
//   cardSectionNewPrice : string;
//   cardSectionSmallH : string
//   quantity: number

// }

// export default function Wishlist() {
//   const router = useRouter();
//   const searchParam = useSearchParams();
//   const [wishlist, setWishlist] = useState<IProduct[]>([]);

//   // Load wishlist data from localStorage and handle search query
//   useEffect(() => {
//     const wishlistData = localStorage.getItem("wishlist");
//     const updatedWishlist: IProduct[] = wishlistData ? JSON.parse(wishlistData) : [];

//     const cardSectionHeading = searchParam.get("cardSectionHeading");
//     const cardSectionNewPrice = searchParam.get("cardSectionNewPrice");
//     const cardSectionSmallH = searchParam.get("cardSectionSmallH");
//     const  cardSecImg= searchParam.get("cardSecImg");

//     // If product details are in the URL, add them to the wishlist
//     if (cardSectionHeading && cardSectionNewPrice && cardSectionSmallH &&  cardSecImg) {
//       const isDuplicate = updatedWishlist.some((item) => item.cardSectionHeading === cardSectionHeading);

//       if (!isDuplicate) {
//         updatedWishlist.push({ cardSectionHeading, cardSectionNewPrice, cardSectionSmallH,  cardSecImg, quantity: 1 });
//       }

//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//       setWishlist(updatedWishlist);
//       router.replace("/wishlist"); // Removes query parameters from the URL
//     } else {
//       setWishlist(updatedWishlist); // Load wishlist on initial render
//     }
//   }, [searchParam, router]);

//   // Handle removing an item from the wishlist
//   const handleRemoveItem = (index: number) => {
//     const updatedWishlist = [...wishlist];
//     updatedWishlist.splice(index, 1);

//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     setWishlist(updatedWishlist);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Header />
//       <h1 className="text-2xl font-bold mb-6 mt-8">Your Wishlist</h1>

//       {wishlist.length === 0 ? (
//         <p className="text-gray-600 text-center">Your wishlist is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {wishlist.map((item, index) => (
//             <Card key={index} className="shadow-md">
//               <CardHeader>
               
//             <div className="w-24 h-34 bg-gray-100 rounded-md">
//                     <Image
//                    src={item.cardSecImg}
//                     alt="Image"
//                      width={96}
//                      height={96}
//                      className="w-full h-full object-cover"
//             />
//           </div>
//               </CardHeader>
//               <CardContent className="p-4 flex flex-col items-start">
//                 <CardTitle className="text-lg font-medium">{item.cardSectionHeading}</CardTitle>
//                 <p className="text-gray-900 mt-1">${item.cardSectionNewPrice}</p>
//                 <Button
//                   variant="destructive"
//                   className="mt-4 flex items-center"
//                   onClick={() => handleRemoveItem(index)}
//                 >
//                   <Trash className="mr-2 h-4 w-4" />
//                   Remove
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//       <Footer/>
//     </div>
//   );
// }



"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";


import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface IProduct {
  cardSecImg: string,
    cardSectionHeading : string;
    cardSectionNewPrice : string;
    cardSectionSmallH : string
    quantity: number
}

export default function Wishlist() {
  const router = useRouter();
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  // Load wishlist data from localStorage and handle search query
  useEffect(() => {
    // Fetch wishlist from localStorage
    const wishlistData = localStorage.getItem("wishlist");
    const updatedWishlist: IProduct[] = wishlistData
      ? JSON.parse(wishlistData)
      : [];

    // Parse URL search parameters
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const  cardSectionHeading= params.get("cardSectionHeading");
      const cardSectionNewPrice = params.get("cardSectionNewPrice");
      const description = params.get("");
      const cardSecImg = params.get("cardSecImg");

      // If product details are in the URL, add them to the wishlist
      if ( cardSectionHeading && cardSectionNewPrice  && cardSecImg) {
        const isDuplicate = updatedWishlist.some(
          (item) => item.cardSectionHeading === cardSectionHeading
        );

        if (!isDuplicate) {
          updatedWishlist.push({
            cardSecImg,
            cardSectionHeading,
            cardSectionNewPrice,
            quantity: 1,
            cardSectionSmallH: ""
          });
        }

        // Update localStorage and state
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);

        // Clean up URL query parameters
        router.replace("/wishlist");
      } else {
        // Load wishlist on initial render
        setWishlist(updatedWishlist);
      }
    }
  }, [router]);

  // Handle removing an item from the wishlist
  const handleRemoveItem = (index: number) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-6 mt-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <Card key={index} className="">
              <CardHeader>
                <Image
                  src={item.cardSecImg}
                  alt={item.cardSectionHeading}
                  className=" "
                  width= {200}
                  height={200}
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col items-start">
                <CardTitle className="text-lg font-medium">
                  {item.cardSectionHeading}
                </CardTitle>
                <p className="text-gray-900 mt-1">${item.cardSectionNewPrice}</p>
                <Button
                  variant="destructive"
                  className="mt-4 flex items-center"
                  onClick={() => handleRemoveItem(index)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}