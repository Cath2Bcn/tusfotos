import Footer from './Footer.jsx'
import Header from "./Header.jsx";
import { Link, Outlet } from "react-router-dom";
import "w3-css/w3.css";


export default function Layout(){

    return(
      <>
      <nav class="w3-top">
        <div
          class="w3-bar w3-white w3-padding w3-card"
          style={{ letterSpacing: "4px" }}
          >
          {/* <img 
            src="https://www.w3schools.com/w3images/rock.jpg" 
            style={{ height: "100%" }}
          /> */}
          <Link class="w3-bar-item w3-button" to="/">
            Home
          </Link>
          <Link class="w3-bar-item w3-button" to="/GridFotos">
            Grid
          </Link>
          <Link class="w3-bar-item w3-button" to="/OneFoto">
            Simple
          </Link>
          <Link class="w3-bar-item w3-button" to="/About">
            About
          </Link>
        </div>
      </nav> 

      <nav 
          class="w3-bar w3-white w3-padding w3-card"
          style={{ letterSpacing: "4px" }}
          >
          <Link class="w3-bar-item w3-button" to="/">
            By Date
          </Link>
          <Link class="w3-bar-item w3-button" to="/">
            By Hashtag
          </Link>
      </nav> 

      {/* body */}
      <div class="w3-content" style={{ maxWidth:"1500px" }}>

        <div>
          <Header class="w3-container" />
        </div>

        {/* <div className="w3-row" id="myGrid" style={{ marginBottom: "128px" }}>
          <div class="w3-third">
            <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/sound.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/woods.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/rock.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/mist.jpg" style={{ width: "100%" }}/>
          </div>

          <div class="w3-third">
            <img src="https://www.w3schools.com/w3images/coffee.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/bridge.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/notebook.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/london.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/avatar_g.jpg" style={{ width: "100%" }}/>
          </div>

          <div class="w3-third">
            <img src="https://www.w3schools.com/w3images/mist.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/workbench.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/gondol.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/skies.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: "100%" }}/>
            <img src="https://www.w3schools.com/w3images/workshop.jpg" style={{ width: "100%" }}/>
          </div>
        </div> */}

        <div>
          <Outlet class="w3-container" />
        </div>
        
        <div>
          <Footer />
        </div>

      </div>
      </>
    );
}