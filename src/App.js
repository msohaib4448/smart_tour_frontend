import React from "react";
// import Header from "../src/component/Header/Header";
// import PopularPage from "../src/component/PopularPage/PopularPage";
// import ExplorePage from "../src/component/ExplorePage/ExplorePage";
// import ExploreDestination from "../src/component/ExploreDestination/ExploreDestination";
// import CustomerReview from '../src/component/CustomerReview/CustomerReview';
// import Footer from "../src/component/Footer/Footer";
import About from './pages/AboutPage/about'
import Contact from './pages/Contact/contact'
import Blogs from './pages/Blogs/blogs'
import Home from './pages/HomePage/Home'
import SignIn from './pages/SignIn/SignIn'
import Hotel  from "./pages/HomePage/Hotel"
import Tour from "./pages/HomePage/Tour";

import { Routes,Route,Link } from "react-router-dom";
import Regsiter from "./pages/Register/Regsiter";

function App() {
  return (
    
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/hotel" element={<Hotel/>}/>
      <Route path="/tour" element={<Tour/>}/>
      <Route path="/register" element={<Regsiter/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
