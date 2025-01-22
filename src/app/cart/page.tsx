
"use client";

import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import Header from "@/components/header";


interface Iproduct{
  cardSecImg : string,
  cardSectionHeading : string;
  cardSectionNewPrice : string;
  cardSectionSmallH : string
  quantity: number
}

export default function ShoppingCart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Iproduct[]>([]);

  // Handle client-side-only actions
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];

    // Check if URL contains product data
    const params = new URLSearchParams(window.location.search);
    const  cardSectionHeading = params.get("name");
    const cardSectionNewPrice = params.get("cardSectionNewPric");
    const  cardSectionSmallH  = params.get("cardSectionSmallH ");
    const cardSecImg =          params.get("cardSecImg");

    if (cardSectionHeading && cardSectionNewPrice && cardSectionSmallH && cardSecImg) {
      const isDuplicate = updatedCart.some(
        (item: Iproduct) => item.cardSectionHeading === cardSectionHeading
      );
      if (!isDuplicate) {
        updatedCart.push({
          cardSecImg ,
         cardSectionHeading ,
        cardSectionNewPrice ,
        cardSectionSmallH ,
         quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      router.replace("/cart"); // Clean up query params
    } else {
      setCartItems(updatedCart);
    }
  }, [router]);

  // Remove an item from the cart
  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Update item quantity
  const handleQuantityChange = (index: number, quantity: number) => {
    if (quantity < 1) return; // Prevent invalid quantities
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[99px]">
        {/* Free Delivery Banner */}
        <div className="mb-8 bg-gray-50 p-4 rounded-lg">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 bg-gray-100 rounded-md">
                          <Image
                            src={item.cardSecImg}
                            alt={item.cardSectionHeading}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.cardSectionHeading}</h3>
                              <p className="text-sm text-gray-600">
                                {item.cardSectionSmallH}
                              </p>
                              <div className="mt-2 space-y-1">
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
                            <p className="text-sm text-black">
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

          {/* Summary Section */}
          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">
                      ${" "}
                      {cartItems
                        .reduce(
                          (total, item) =>
                            total + +item.cardSectionNewPrice * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>
                      ${" "}
                      {cartItems
                        .reduce(
                          (total, item) =>
                            total + +item.cardSectionNewPrice * item.quantity,
                          0
                        )
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