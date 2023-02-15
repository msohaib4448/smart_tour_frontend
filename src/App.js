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
import Hotel from "./pages/hotelDetails/Hotel"
import Tour from "./pages/HomePage/Tour";
// import logo from "./pages/logo";
import { Routes, Route } from "react-router-dom";
import List from "./pages/hotelList/List";
import Searchbar from "./pages/hotelHomePage/searchbar";
import Register from "./pages/Register/Register";
import Login from "./pages/SignIn/SignIn";
import Cookies
 from "js-cookie";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const token= Cookies.get('token')
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotel" element={<Searchbar />} />
        <Route path="/hotels" element={token? <List />: <Login/>} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignIn />} />
        

      </Routes>
    </div>
  );
}

export default App;
