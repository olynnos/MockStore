import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumn";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center />
      </div>

      <CartColumns />
      <CartList />
      <CartTotal />
    </section>
  );
}
