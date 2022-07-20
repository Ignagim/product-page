import React from "react";

function PorductInfo() {
  return (
    <article className="productInfo">
      <h4>SNEAKER COMPANY</h4>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="productInfo__price">
        <div className="productInfo__price--final">
          <h2>$125.00</h2>
          <h3>50%</h3>
        </div>
        <div className="productInfo__price--initial">
          <p>$250.00</p>
        </div>
      </div>
    </article>
  );
}

export default PorductInfo;
