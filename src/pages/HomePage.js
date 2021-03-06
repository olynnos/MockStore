import React from "react";

import Hero from "../components/Hero";
import Services from "../components/HomePage/Services";
import Features from "../components/HomePage/Featured";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link">
          our products
        </Link>
      </Hero>
      <Services />
      <Features />
    </>
  );
}
