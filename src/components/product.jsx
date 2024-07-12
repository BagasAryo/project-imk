import React from "react";
import { products } from "../data/dummy";

const Product = () => {
  return (
    <div id="product" className="from-slate-500 to-slate-50 bg-gradient-to-b">
      <div className="text-2xl font-semibold text-center py-10">Our Product</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
        {products.map((product) => {
          return <img src={require("../asset/" + product.image + ".jpg")} alt="" width={350}/>;
        })}
      </div>
    </div>
  );
};

export default Product;
