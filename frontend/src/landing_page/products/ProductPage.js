import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

const products = [
  {
    name: "Kite",
    img: "/Media/kite.png",
    desc: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    tryDemo: "https://kite.zerodha.com",
    learnMore: "#",
    googlePlay: "#",
    appStore: "#",
    layout: "left",
  },
  {
    name: "Console",
    img: "/Media/console.png",
    desc: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    learnMore: "#",
    layout: "right",
  },
  {
    name: "Coin",
    img: "/Media/Coin.png",
    desc: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience seamlessly on your Android and iOS devices.",
    tryDemo: "#",
    learnMore: "#",
    googlePlay: "#",
    appStore: "#",
    layout: "left",
  },
  {
    name: "Kite Connect API",
    img: "/Media/kiteconnect.png",
    desc: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    learnMore: "#",
    layout: "right",
  },
  {
    name: "Varsity",
    img: "/Media/varsity.png",
    desc: "An easy to grasp, comprehensive collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size modules to help you learn on the go.",
    tryDemo: "https://zerodha.com/varsity/",
    learnMore: "#",
    googlePlay: "#",
    appStore: "#",
    layout: "left",
  },
];

function ProductPage() {
  return (
    <>
      <Hero />
      {products.map((p) =>
        p.layout === "left" ? <LeftImage key={p.name} product={p} /> : <RightImage key={p.name} product={p} />
      )}
      <p className="text-center my-5 py-3" style={{ fontSize: "1.1rem" }}>
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>Zerodha.tech blog</a>.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
