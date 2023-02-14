import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import imageIslamabad from '../../assets/Islamabad-hotel.jpeg'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import { addToCart, decreaseCart, getTotals } from '../../redux/features/cartSlice'
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Header/>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <img src={imageIslamabad} style={styles.image} alt={"slamabad Hotel"} />
          <h3 style={styles.name}>{cart.cartItems[0]}</h3>
          <div style={styles.details}>

            <p style={styles.price}>Price: ${cart.cartTotalAmount}</p>
            <div style={styles.quantityContainer}>
              <button
                onClick={() => { dispatch(decreaseCart()) }}
                style={styles.quantityButton}
              >
                -
              </button>
              <p style={styles.quantity}>{cart.cartTotalQuantity}</p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )
      }
      <Footer/>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    margin: 20,
    border: "1px solid black",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  name: {
    fontSize: 20,
    margin: 0,
  },
  price: {
    fontSize: 16,
    color: "gray",
    margin: 0,
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    cursor: "pointer",
  },
  quantity: {
    margin: 0,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
  },
};

export default Cart;