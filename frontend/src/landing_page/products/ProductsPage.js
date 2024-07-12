import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import RightSection from "./RightSection";

function ProductsPage(){
    return (
      <>
        <Hero />
        <LeftSection
          imageURL="media/image/kite.png"
          productName="Kite"
          productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightSection />
        <LeftSection
          imageURL="media/image/coin.png"
          productName="coin"
          productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightSection />
        <LeftSection
          imageURL="media/image/varsity.png"
          productName="Varsity mobile"
          productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
         
          googlePlay=""
          appStore=""
        />
        
        <Universe />
      </>
    );
}
export default ProductsPage;
