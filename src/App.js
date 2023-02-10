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

import { Routes,Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/signin" element={<SignIn/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
