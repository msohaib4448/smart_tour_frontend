import React from "react";
import hunza from "../../components/assets/imag2.jpg";
import sawat from "../../components/assets/22.jpg";
import kalam from "../../components/assets/24.jpg";
import babusr from "../../components/assets/25.jpg";
import kashmir from "../../components/assets/26.jpg";
import gilgit from "../../components/assets/27.jpg";
import { Link } from "react-router-dom";
import "./ExplorePage.css";

function ExplorePage() {
  return (
    <div className="ExplorePage">
    <div className="container">
      <h1 className="heading">Popular Tours</h1>
      <div className="ExplorePageInside">
        <div className="ExploreInsideBox">
          <div className="imageBoxInside">
            <div class="hover10 column">

              <div class="container1">
               <figure> <img src={hunza} alt="image" />
                  <div class="middle">
                   <Link to="/tours"> <div class="text1"><h1>HUNZA</h1></div></Link>
                  </div>
                  </figure>           
              </div>

            </div>
          </div>
        </div>
        <div>

          <div className="imageBoxInside">
            <div class="hover10 column">

              <div class="container1">
                <figure> <img src={sawat} alt="image" />
                 <div class="middle">
                 <Link to="/tours"> <div class="text1"><h1>SAWAT</h1></div></Link>
                  </div>
                </figure>
              </div>

            </div>
          </div>
        </div>
        <div className="imageBoxInside">
          <div class="hover10 column">

            <div class="container1">
              <figure> <img src={babusr} alt="image" />
                <div class="middle">
                  <Link to="/tours"><div class="text1"><h1>BABUSAR</h1></div></Link>
                </div>
              </figure>
            </div>

          </div>
        </div>
      </div>

      <div className="ExplorePageInside">
        <div className="ExploreInsideBox">
          <div className="imageBoxInside">
            <div class="hover10 column">

              <div class="container1">
                <figure> <img src={kashmir} alt="image" />
                  <div class="middle">
                  <Link to="/tours">  <div class="text1"><h1>KASHMIR</h1></div></Link>
                  </div>
                </figure>
              </div>

            </div>
          </div>
        </div>
        <div>

          <div className="imageBoxInside">
            <div class="hover10 column">

              <div class="container1">
                <figure> <img src={gilgit} alt="image" />
                  <div class="middle">
                    <Link to="/tours"><div class="text1"><h1>GILGIT</h1></div></Link>
                  </div>
                </figure>
              </div>

            </div>
          </div>
        </div>
        <div className="imageBoxInside">
          <div class="hover10 column">

            <div class="container1">
              <figure> <img src={kalam} alt="image" />
                <div class="middle">
                 <Link to="/tours"><div class="text1"><h1>KALAM</h1></div></Link> 
                </div>
              </figure>
            </div>

          </div>
        </div>
      </div>


    </div>
  </div>
  );
}

export default ExplorePage;
