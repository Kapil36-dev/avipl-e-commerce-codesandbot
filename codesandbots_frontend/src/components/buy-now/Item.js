import React from "react";
import "./Item.css";
import axios from "axios";
import { useStateValue } from "../Stateprovider";
import { Link } from "react-router-dom";

function Item() {
  const [{ product }, dispatch] = useStateValue();
  console.log(product);
  const addTocart = () => {
    const newuser = {
      data_category: product.data_category,
      product_type: product.product_type,
      new_price: product.new_price,
      old_price: product.old_price,
      imageurl: product.imageurl,
      rating: product.rating,
    };
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        data_category: product.data_category,
        product_type: product.product_type,
        new_price: product.new_price,
        old_price: product.old_price,
        imageurl: product.imageurl,
        rating: product.rating,
      },
    });
    axios({
      method: "post",
      url: "https://e-commerce-codesandbot.herokuapp.com/addtocart/61330a3bca1623a507108096/3",
      data: newuser,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(basket);

  const buy_now = () => {
    const item = {
      data_category: product.data_category,
      product_type: product.product_type,
      new_price: product.new_price,
      age: product.age,
      data: product.data,
      old_price: product.old_price,
      imageurl: product.imageurl,
      rating: product.rating,
    };
    dispatch({
      type: "BUY_NOW",
      item: item,
    });
  };
  return (
    <>
      <div className="product_container">
        <div className="product_image">
          <i
            class="fa fa-chevron-left sliding_icon_left"
            aria-hidden="true"
          ></i>

          <img src={product.imageurl} alt="image not found" />

          <i
            class="fa fa-chevron-right  sliding_icon_right"
            aria-hidden="true"
          ></i>
        </div>
        <div className="product_details">
          <div className="item_category">
            <span className="product_category_details_left">
              {product.data}
            </span>
            <span className="product_category_details_right">
              {product.age}
            </span>
          </div>
          <div className="product_details_heading">
            <div className="product_title">
              <div className="product_name">
                {product.product_type} Starter Kit
              </div>
              <div className="rating">⭐{product.rating}</div>
            </div>
            <div className="product_info">
              The Best Starter Kit to make Robotics.
              {product.about_product}
            </div>
          </div>

          <div className="product_details_options">
            <div className="about_product">{product.product_type}</div>
            <div className="about_product">100+ MODALS</div>
            <div className="about_product">35+ PARTS</div>
          </div>
          <div className="product_price">
            <div>
              &#8377; &nbsp;
              <span className="product_current_price">{product.new_price}</span>
            </div>

            <div>
              <span className="product_mrp">M.R.P:-</span>
              <span className="product_real_price">
                &#8377; {product.old_price}
              </span>
            </div>
          </div>

          <div className="product_details_buttons">
            <div className="product_details_button">
              <button className="product_buy_button" onClick={(e) => buy_now()}>
                <Link to="/shipping_page">BUY NOW</Link>
              </button>
            </div>
            <div className="product_details_button">
              <button
                className="product_addtocart_button"
                onClick={(e) => addTocart()}
              >
                <i className="fa fa-shopping-cart fa-lg"></i> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
