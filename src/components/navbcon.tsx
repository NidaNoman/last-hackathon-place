// import Link from "next/link"

// export default function Navbcon(){
//     return(
//         <nav className="flex justify-between items-center p-4 bg-white shadow-md w-full h-[91px]">
//         <div className="text-lg font-bold">Bandage</div>
//         <ul className="hidden md:flex space-x-6">
//          <Link href="/" ><li>Home</li></Link>
//         <Link href="/" ><li>Product</li></Link>
//         <Link href="/"> <li>Pricing</li></Link>
//          <Link href="/"> <li>Contact</li></Link>
//         </ul>
//         <div className="flex items-center space-x-4">
//           <button className="text-blue-500">Login</button>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">Become a member</button>
//         </div>
//       </nav>

//     )
// }

import Link from "next/link";

export default function Navbcon() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md w-full h-[91px]">
      {/* Brand Name */}
      <div className="text-lg font-bold">Bandage</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <Link href="/">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
        </Link>
        <Link href="/">
          <li className="cursor-pointer hover:text-blue-500">Product</li>
        </Link>
        <Link href="/">
          <li className="cursor-pointer hover:text-blue-500">Pricing</li>
        </Link>
        <Link href="/">
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </Link>
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-blue-500 hover:underline">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Become a member
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Open Menu"
          className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
