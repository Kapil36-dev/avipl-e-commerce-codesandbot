import React from "react";
import "./order-summary-card.css";
import { useStateValue } from "../../../../Stateprovider"

export default function OrderSummaryCard({
  quantity,
  setquantity,
  order,
  setOrders,
}) {
  console.log('====================================');
  console.log(order);
  console.log('====================================');
  const [{ basket }, dispatch] = useStateValue();

  const onClickHandler = (id) => {
    dispatch({ type: "INCREASE_ITEM_QUANTITY", id: id })
    console.log("update", basket);
    setOrders(basket);
  };

  const onRemoveHandler = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      id: id
    })
    setOrders(basket);
  };

  return (
    <div className="order-summary-card">
      <div className="order-summary-card-header delivery_heading">
        <span>3.</span>ORDER SUMMARY ✔️
      </div>
      <div className="order-summary-card-orders-list ">
        {order.length == 0 ? (
          <div style={{ marginLeft: "10px" }}>No Orders Yet!</div>
        ) : (
          order.map((elem) =>
          // (
          {
            console.log(elem);
            return <div className="order-item" key={elem.id}>
              <img
                className="order-item-image"
                src={`${elem.imageurl}`}
                alt="item-image"
              ></img>
              <div className="order-item-info">
                <h2>{elem.product_type}</h2>
                <div className="orer-item-sect">
                  <div className="quantity">
                    <p id="quantity" className="quantity-value">
                      {elem.quantity}
                    </p>
                    <div
                      onClick={() => {
                        onClickHandler(elem.id);
                      }}
                    >
                      +
                    </div>
                  </div>
                  <p className="price">&#8377;{parseInt(elem.new_price) * parseInt(elem.quantity)}/-</p>
                </div>
                <div
                  className="remove-button"
                  onClick={() => {
                    onRemoveHandler(elem.id);
                  }}
                >
                  Remove
                </div>
              </div>
              <div className="delivery-date">
                Delivered By {elem.delivery_date || ' '}
              </div>
            </div>
          }
            // )
          )
        )}
      </div>
    </div>
  );
}
