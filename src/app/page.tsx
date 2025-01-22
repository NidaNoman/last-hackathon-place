import Feature from "@/components/feat";
import Footer from "@/components/footer";
import ProductPromo from "@/components/greensection";
import Header from "@/components/header";
import Herosection from "@/components/hero";


// import Hero from "@/components/hero";
import EditorsPick from "@/components/picspart";
import BestsellerProducts from "@/components/products";
import NeuralUniverse from "@/components/universal";


export default async function Home(){
  return(
    <div>
      <Header/>
      {/* <Hero/> */}
     { await Herosection() }
    <EditorsPick/>
      { await BestsellerProducts()}
      < ProductPromo/>
       <NeuralUniverse/>
      <Feature/>
      <Footer/>
     


      

    </div>
  )
}












// import Feature from "@/components/feat";
// import Footer from "@/components/footer";
// import ProductPromo from "@/components/greensection";
// import Header from "@/components/header";
// // import Herosection from "../components/hero";

// // Unused import
// import EditorsPick from "@/components/picspart";
// import BestsellerProducts from "@/components/products";
// import NeuralUniverse from "@/components/universal";
// import dynamic from "next/dynamic";
// import { Suspense } from "react";
// import Herosection from "../components/hero";

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       {/* Uncomment below if the Hero component is needed */}
//       {/* <Hero /> */}
//       <Herosection/>
//       <EditorsPick />
//       <BestsellerProducts/>
//        <ProductPromo />
//       <NeuralUniverse />
//       <Feature />
//       <Footer />
//     </div>
//   );
// }
