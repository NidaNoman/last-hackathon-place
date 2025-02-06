







// "use client";

// import Image from "next/image";
// import { Heart, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import Link from "next/link";
// import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react";
// import Header from "@/components/header";
// import { clerkGetUser, sanityUserPost } from "@/services/userApi";
// // import { clerkGetUser } from "@/services/userApi";



// interface Iproduct{
//   cardSecImg : string,
//   cardSectionHeading : string;
//   cardSectionNewPrice : string;
//   cardSectionSmallH : string
//   quantity: number
// }

// export default function ShoppingCart() {
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState<Iproduct[]>([]);


//   // Handle client-side-only actions
//   useEffect(() => {
//     const cart = localStorage.getItem("cart");
//     const updatedCart = cart ? JSON.parse(cart) : [];
//     // clerkGetUser()

//     // Check if URL contains product data
//     const params = new URLSearchParams(window.location.search);
//     const  cardSectionHeading = params.get("name");
//     const cardSectionNewPrice = params.get("cardSectionNewPrice");
//     const  cardSectionSmallH  = params.get("cardSectionSmallH");
//     const cardSecImg =          params.get("cardSecImg");

//     if (cardSectionHeading && cardSectionNewPrice && cardSectionSmallH && cardSecImg) {
//       const isDuplicate = updatedCart.some(
//         (item: Iproduct) => item.cardSectionHeading === cardSectionHeading
//       );
//       if (!isDuplicate) {
//         updatedCart.push({
//           cardSecImg ,
//          cardSectionHeading ,
//         cardSectionNewPrice ,
//         cardSectionSmallH ,
//          quantity: 1,
//         });
//       }
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setCartItems(updatedCart);
//       router.replace("/cart"); // Clean up query params
//     } else {
//       setCartItems(updatedCart);
//     }
//   }, [router]);

//   // Remove an item from the cart
//   const handleRemoveItem = (index: number) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//   };

//   // Update item quantity
//   const handleQuantityChange = (index: number, quantity: number) => {
//     if (quantity < 1) return; // Prevent invalid quantities
//     const updatedCart = [...cartItems];
//     updatedCart[index].quantity = quantity;
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//   };

// // for clerk
// useEffect(()=>{
//   sanityUserPost()
// },[])


//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 py-8 mt-[99px]">
//         {/* Free Delivery Banner */}
//         <div className="mb-8 bg-gray-50 p-4 rounded-lg">
//           <p className="text-sm font-medium">Free Delivery</p>
//           <p className="text-sm text-gray-600">
//             Applies to orders of $70 or more.
//           </p>
//           <Link href="/shipment">
//             <Button variant="link" className="text-sm">
//               View details
//             </Button>
//           </Link>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
//             <div className="space-y-6">
//               {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//               ) : (
//                 cartItems.map((item, index) => (
//                   <Card key={index}>
//                     <CardContent className="p-6">
//                       <div className="flex gap-6">
//                         <div className="w-24 h-24 bg-gray-100 rounded-md">
//                           <Image
//                             src={item.cardSecImg}
//                             alt={item.cardSectionHeading}
//                             width={96}
//                             height={96}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex justify-between">
//                             <div>
//                               <h3 className="font-medium">{item.cardSectionHeading}</h3>
//                               <p className="text-sm text-gray-600">
//                                 {item.cardSectionSmallH}
//                               </p>
//                               <div className="mt-2 space-y-1">
//                                 <p className="text-sm">Quantity:</p>
//                                 <input
//                                   type="number"
//                                   min={1}
//                                   value={item.quantity}
//                                   onChange={(e) =>
//                                     handleQuantityChange(index, +e.target.value)
//                                   }
//                                   className="bg-slate-200 rounded pl-2 text-black w-12"
//                                 />
//                               </div>
//                             </div>
//                             <p className="text-sm text-black">
//                               $ {(+item.cardSectionNewPrice * item.quantity).toFixed(2)}
//                             </p>
//                           </div>
//                           <div className="flex gap-4 mt-4">
//                             <Button variant="ghost" size="sm">
//                               <Heart className="w-4 h-4" />
//                             </Button>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => handleRemoveItem(index)}
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               )}
//             </div>
//           </div>

//           {/* Summary Section */}
//           <div>
//             <Card className="sticky top-8">
//               <CardContent className="p-6">
//                 <h2 className="text-xl font-medium mb-4">Summary</h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between">
//                     <span className="text-sm">Subtotal</span>
//                     <span className="text-sm">
//                       ${" "}
//                       {cartItems
//                         .reduce(
//                           (total, item) =>
//                             total + +item.cardSectionNewPrice * item.quantity,
//                           0
//                         )
//                         .toFixed(2)}
//                     </span>
//                   </div>
//                   <Separator />
//                   <div className="flex justify-between font-medium">
//                     <span>Total</span>
//                     <span>
//                       ${" "}
//                       {cartItems
//                         .reduce(
//                           (total, item) =>
//                             total + +item.cardSectionNewPrice * item.quantity,
//                           0
//                         )
//                         .toFixed(2)}
//                     </span>
//                   </div>
//                   <Link href="/checkout">
//                     <Button className="w-full bg-[#23A6F0] hover:bg-[#23A6F0]/90">
//                       Checkout
//                     </Button>
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
























"use client";

import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/header";


interface Iproduct{
  name: void;
  cardSecImg : string,
  cardSectionHeading : string;
  cardSectionNewPrice : string;
  cardSectionSmallH : string
  quantity: number
}


export default function ShoppingCart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Iproduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];

    const params = new URLSearchParams(window.location.search);
    const cardSectionHeading = params.get("cardSectionHeading");
    const  cardSectionNewPrice = params.get("cardSectionNewPrice");
    const  cardSectionSmallH = params.get("cardSectionSmallH");
    const  cardSecImg  = params.get("cardSecImg");

    if (cardSectionHeading && cardSectionNewPrice && cardSectionSmallH && cardSecImg) {
      const isDuplicate = updatedCart.some(
        (item: Iproduct) => item.cardSectionHeading === cardSectionHeading
      );
      if (!isDuplicate) {
        updatedCart.push({
          cardSectionHeading ,
          cardSectionNewPrice,
          cardSectionSmallH,
          cardSecImg ,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      router.replace("/cart");
    } else {
      setCartItems(updatedCart);
    }
  }, [router]);

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[99px]">
        <div className="mb-8 bg-gray-50 p-4 rounded-lg text-center md:text-left">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">
            Applies to orders of $70 or more.
          </p>
          <Link href="/shipment">
            <Button variant="link" className="text-sm">
              View details
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <p className="text-center md:text-left">Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="w-full md:w-24 md:h-24 bg-gray-100 rounded-md overflow-hidden">
                          <Image
                            src={item.cardSecImg}
                            alt={item.cardSectionHeading}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <h3 className="font-medium">{item.cardSectionHeading}</h3>
                              <p className="text-sm text-gray-600">
                                {item.cardSectionSmallH}
                              </p>
                              <div className="mt-2 flex items-center gap-2">
                                <p className="text-sm">Quantity:</p>
                                <input
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(index, +e.target.value)
                                  }
                                  className="bg-slate-200 rounded pl-2 text-black w-12"
                                />
                              </div>
                            </div>
                            <p className="text-sm text-black mt-2 md:mt-0">
                              $ {(+item.cardSectionNewPrice * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <div className="flex gap-4 mt-4">
                            <Button variant="ghost" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div className="mt-14 ">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">
                      ${" "}
                      {cartItems
                        .reduce((total, item) => total + +item.cardSectionNewPrice * item.quantity, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                  <span className="text-sm">Estimated Delivery & Handling</span>
                  <span className="text-sm">Free</span>
                </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>
                      ${" "}
                      {cartItems
                        .reduce((total, item) => total + +item.cardSectionNewPrice * item.quantity, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <Link href="/checkout">
                    <Button className="w-full bg-[#23A6F0] hover:bg-[#23A6F0]/90">
                      Checkout
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}