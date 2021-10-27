import React, { useEffect, useState } from 'react'
import "./order-summary-card.css"
import { useStateValue } from "../../Stateprovider"
import { getSize } from "../../reducer"
import axios from 'axios';
import GetCart from '../../api/api';

export default function OrderSummaryCard({
   setOrders,
}) {
   const [{ basket }, dispatch] = useStateValue();
   const [getCarts, setgetCarts] = useState([]);
   useEffect(() => {
      const getCart = async () => {
         setgetCarts(await GetCart());
      };
      getCart();
      // console.log(Dailydata);
   }, [getCarts]);
   const onClickHandler = (id, quantity) => {
      dispatch({ type: "INCREASE_ITEM_QUANTITY", id: id })
      console.log("update", basket);
      setOrders(basket);
      quantity++;
      console.log(getCarts);
      axios({ method: 'put', url: `https://e-commerce-codesandbot.herokuapp.com/updatecart/${id}/${quantity}` }).then((res) => {
         console.log(res);
         // history.push('/')
      }).catch((err) => {
         console.log(err);
      })
   };

   const onRemoveHandler = (id, quantity) => {
      dispatch({
         type: 'REMOVE_ITEM',
         id: id
      })
      console.log("remove", basket);
      setOrders(basket);
      quantity--;
      axios({ method: 'put', url: `https://e-commerce-codesandbot.herokuapp.com/updatecart/${id}/${quantity}` }).then((res) => {
         console.log(res);
         // history.push('/')
      }).catch((err) => {
         console.log(err);
      })
   };

   return (
      <div className="order-summary-card2" >
         <div className="order-summary-card-orders-list2">
            {getSize(basket) == 0 ? <div style={{ marginLeft: '10px' }}>No Orders Yet!</div> : basket.map(elem => <div className="order-item" key={elem.id}>
               <img className="order-item-image2" src={`${elem.imageurl}`} alt="item-image"></img>
               <div className="order-item-info2">
                  <h2>{elem.product_type}</h2>
                  <div className="orer-item-sect2">
                     <div className="quantity2">
                        <p id="quantity" className="quantity-value2">{elem.quantity}</p>
                        <div onClick={() => { onClickHandler(elem.id, elem.quantity) }}>+</div>
                     </div>
                     <p className="price2">&#8377;{elem.new_price * elem.quantity}/-</p>
                  </div>
                  <div className="remove-button2" onClick={() => { onRemoveHandler(elem.id, elem.quantity); }}>Remove</div>
               </div>
               <div className="delivery-date2">Delivered By {elem.delivery_date}</div>
            </div>)}
         </div>
      </div>
   )
}
