import React from "react";
import hunza from "../../components/assets/imag2.jpg";
import sawat from "../../components/assets/22.jpg";
import kalam from "../../components/assets/24.jpg";
import babusr from "../../components/assets/25.jpg";
import kashmir from "../../components/assets/26.jpg";
import gilgit from "../../components/assets/27.jpg";
import "./ExplorePage.css";

function ExplorePage() {
  return (
    <div className="ExplorePage">
      <div className="container">
        <h1 className="heading">Popular Tours</h1>
        <div className="ExplorePageInside">

          <div className="ExploreInsideBox">
            <div className="imageBoxInside">
              
              <img src={hunza} alt="image" />
            </div>
            <div className='TextBoxHeading'>
              <h4>HUNZA</h4>
            </div>

            <div className='reviewalign'>⭐⭐⭐⭐⭐</div>
          </div>

          <div className="ExploreInsideBox">
            <div className="ExploreInsideBox">
              <div className="imageBoxInside">
                <img src={sawat} alt="image" />
              </div>
              <div className='TextBoxHeading'>
                <h4>SAWAT</h4>
              </div>
              <div className='reviewalign'>⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="ExploreInsideBox">
            <div className="imageBoxInside">
              <img src={kalam} alt="image" />
            </div>
            <div className='TextBoxHeading'>
              <h4>KALAM</h4>
            </div>
            <div className='reviewalign'>⭐⭐⭐⭐⭐</div>

          </div>
        </div>

        <div className="ExplorePageInside">
          <div className="ExploreInsideBox">
            <div className="imageBoxInside">
              <img src={babusr} alt="image" />
            </div>
            <div className='TextBoxHeading'>
              <h4>BABUSR TOP</h4>
            </div>
            <div className='reviewalign'>⭐⭐⭐⭐⭐</div>

          </div>

          <div className="ExploreInsideBox">
            <div className="imageBoxInside">
              <img src={kashmir} alt="image" />
            </div>
            <div className='TextBoxHeading'>
              <h4>KASHMIR</h4>
            </div>
            <div className='reviewalign'>⭐⭐⭐⭐⭐</div>

          </div>
          <div className="ExploreInsideBox">
            <div className="imageBoxInside">
              <img src={gilgit} alt="image" />
            </div>
            <div className='TextBoxHeading'>
              <h4>GILGIT</h4>
            </div>
            <div className='reviewalign'>⭐⭐⭐⭐⭐</div>

          </div>
        </div>
        <div className="ExploreButtonCenter">
          <button className="ExploreButton">View All Tours</button>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
