import Footer from "../../components/Footer/footer";
import Header from "../../components/searchbar/searchBar";
import Navbar from "../../components/Header/Header";
import "../hotelHomePage/home.css"

const Searchbar = () => {
  return (
    <div>
      <Navbar />
      <Header/> 
      <div className="homeContainer">
        <Footer/>
      </div>
    </div>
  );
};

export default Searchbar;
