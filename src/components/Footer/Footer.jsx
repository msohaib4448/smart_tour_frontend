import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
   <footer>
  <div class="container">
    <div class="text">
      <p>Copyright SMART TOURS © 2023</p>
    </div>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
    <div class="payment-methods">
      <i class="fa fa-cc-visa"></i>
      <i class="fa fa-cc-mastercard"></i>
      <i class="fa fa-cc-paypal"></i>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Footer;
