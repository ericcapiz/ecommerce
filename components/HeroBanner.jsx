import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <p className="clippers-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <img
        src={urlFor(heroBanner.image)}
        alt="headphones"
        className="hero-banner-image"
      />

      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Hours</h5>
          <p>{heroBanner.desc}</p>
          <p>Call/Text: 312-555-5555</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

//53min mark
