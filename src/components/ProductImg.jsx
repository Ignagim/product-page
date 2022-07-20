import React, { useState } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import close from "../images/icon-close-light.svg";
import previewProduct1 from "../images/image-product-1-thumbnail.jpg";
import previewProduct2 from "../images/image-product-2-thumbnail.jpg";
import previewProduct3 from "../images/image-product-3-thumbnail.jpg";
import previewProduct4 from "../images/image-product-4-thumbnail.jpg";

function ProductImg() {
  const [index, setIndex] = useState(0);
  const [openBigImg, setOpenBigImg] = useState(false);

  const images = [
    {
      img: product1,
    },
    {
      img: product2,
    },
    {
      img: product3,
    },
    {
      img: product4,
    },
  ];

  const showImage = (images, index) => {
    if (index > 3) {
      setIndex(0);
      return images[0].img;
    } else if (index < 0) {
      setIndex(3);
      return images[3].img;
    } else {
      return images[index].img;
    }
  };

  return (
    <article className="productImg">
      <div className="productImg__arrow--left">
        <img
          src={leftArrow}
          alt="arrow left"
          onClick={() => setIndex(index - 1)}
        />
      </div>
      <img
        src={showImage(images, index)}
        alt="product"
        className="productImg__product"
        onClick={() => setOpenBigImg(!openBigImg)}
      />
      <div className="productImg__arrow--right">
        <img
          src={rightArrow}
          alt="arrow left"
          onClick={() => setIndex(index + 1)}
        />
      </div>
      <div className="productImg__previews bigscreen">
        <img
          src={previewProduct1}
          alt="product preview"
          onClick={() => setIndex(0)}
          className={index === 0 ? "productImg__previews--focus" : null}
        />
        <img
          src={previewProduct2}
          alt="product preview"
          onClick={() => setIndex(1)}
          className={index === 1 ? "productImg__previews--focus" : null}
        />
        <img
          src={previewProduct3}
          alt="product preview"
          onClick={() => setIndex(2)}
          className={index === 2 ? "productImg__previews--focus" : null}
        />
        <img
          src={previewProduct4}
          alt="product preview"
          onClick={() => setIndex(3)}
          className={index === 3 ? "productImg__previews--focus" : null}
        />
      </div>

      {openBigImg ? (
        <div className="productImg__big bigscreen">
          <div className="cross">
            <img src={close} alt="cross" onClick={() => setOpenBigImg(false)} />
          </div>
          <div className="productImg__bigArrow--left">
            <img
              src={leftArrow}
              alt="arrow left"
              onClick={() => setIndex(index - 1)}
            />
          </div>
          <img
            src={showImage(images, index)}
            alt="product"
            className="productImg__product"
          />
          <div className="productImg__bigArrow--right">
            <img
              src={rightArrow}
              alt="arrow left"
              onClick={() => setIndex(index + 1)}
            />
          </div>
          <div className="productImg__big--previews bigscreen">
            <div>
              <img
                src={previewProduct1}
                alt="product preview"
                onClick={() => setIndex(0)}
                className={
                  index === 0 ? "productImg__bigPreviews--focus" : null
                }
              />
            </div>
            <div>
              <img
                src={previewProduct2}
                alt="product preview"
                onClick={() => setIndex(1)}
                className={
                  index === 1 ? "productImg__bigPreviews--focus" : null
                }
              />
            </div>
            <div>
              <img
                src={previewProduct3}
                alt="product preview"
                onClick={() => setIndex(2)}
                className={
                  index === 2 ? "productImg__bigPreviews--focus" : null
                }
              />
            </div>
            <div>
              <img
                src={previewProduct4}
                alt="product preview"
                onClick={() => setIndex(3)}
                className={
                  index === 3 ? "productImg__bigPreviews--focus" : null
                }
              />
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default ProductImg;
