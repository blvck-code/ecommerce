import React from "react";
import "../app/globals.css";
import { Product, FooterBanner, HeroBanner } from "../components";

import { client } from "../lib/client";

const Home = ({ products, bannerData }: any) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product: any) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const banneryQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(banneryQuery);

  console.log("Products ==>>", products);
  return {
    props: { products, bannerData },
  };
};

export default Home;
