import React from "react";
import Header1 from "../components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3.jsx";
import Image from "next/image";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-10 my-10">
        <Image
          src="/banner1.avif"
          alt="banner"
          width={200}
          height={200}
          className="h-80 w-full"
        />
      </div>
      <div className="mx-10 my-10">
        <Image
          src="/banner2.avif"
          alt="banner"
          width={200}
          height={200}
          className="h-30 w-full"
        />
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
