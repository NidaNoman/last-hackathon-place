import { useState, useEffect } from 'react';
export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const addToWishlist = (productId: string) => {
    const updatedWishlist = [...wishlist, productId];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter(id => id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const wishlistCount = wishlist.length;

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist, wishlistCount };
}


