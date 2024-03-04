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
          <Link class="w3-bar-item w3-button" to="/">
            <img alt="TF"
              src="https://www.w3schools.com/w3images/rock.jpg" 
              height={70}
            />
          </Link>
          <Link class="w3-bar-item w3-button" to="/GridFotos">
            <br/>Grid<br/><br/>
          </Link>
          <Link class="w3-bar-item w3-button" to="/OneFoto">
            <br/>Simple<br/><br/>
          </Link>
          <Link class="w3-bar-item w3-button" to="/About">
            <br/>About<br/><br/>
          </Link>
          <Link class="w3-bar-item w3-button" to="/DataList">
            <br/>List<br/><br/>
          </Link>
          <Link class="w3-bar-item w3-button" to="/DataTable">
            <br/>Table<br/><br/>
          </Link>
        </div>
      </nav> 

      {/*  <nav 
          class="w3-bar w3-white w3-padding w3-card"
          style={{ letterSpacing: "4px" }}
          >
          <Link class="w3-bar-item w3-button" to="/Date">
            By Date
          </Link>
          <Link class="w3-bar-item w3-button" to="/Hashtags">
            By Hashtags
          </Link>
      </nav>  */}

      {/* body */}
      <div class="w3-content" style={{ maxWidth:"1500px" }}>
        <div>
          <Header class="w3-container" />
        </div>

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