import Image from "next/image";
import Navebar from "./component/Navebar";
import Hero from "./component/Hero";
// import Hero4 from "./component/Hero4";
import Footer from "./component/Footer";
import Insta from "./component/Insta";
import Hero3 from "./component/Hero3";
import Sofa from "./component/Sofa";

export default function Home() {
  return (
    <div>
      <Navebar />
      <Hero />
      <Hero3 />
      <Sofa />
      {/* <Hero4 /> */}
       <Insta />
      <Footer />
      
    </div>
  );
}
