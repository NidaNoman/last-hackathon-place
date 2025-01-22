"use client";

import { useWishlist } from "../hooks/wishlist";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((productId:any, index:any) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded">
              <span>Product: {productId}</span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => removeFromWishlist(productId)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
