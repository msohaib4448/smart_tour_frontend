import React from "react";
// import Header from "../src/component/Header/Header";
// import PopularPage from "../src/component/PopularPage/PopularPage";
// import ExplorePage from "../src/component/ExplorePage/ExplorePage";
// import ExploreDestination from "../src/component/ExploreDestination/ExploreDestination";
// import CustomerReview from '../src/component/CustomerReview/CustomerReview';
// import Footer from "../src/component/Footer/Footer";
import AboutUs from './pages/AboutPage/AboutUs'
import Contact from './pages/Contact/Contact'
import Blogs from './pages/Blogs/blogs'
import Home from './pages/HomePage/Home'
import SignIn from './pages/SignIn/SignIn'
import Hotel from "./pages/HomePage/Hotel"
import Tour from "./pages/HomePage/Tour";
import Cart from './pages/Cart/Cart';
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel/PaymentCancel";
// import logo from "./pages/logo";
import { Routes, Route } from "react-router-dom";
import Regsiter from "./pages/Register/Regsiter";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />


      </Routes>
    </div>
  );
}

export default App;
