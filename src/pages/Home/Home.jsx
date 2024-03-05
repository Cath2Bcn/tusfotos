import "w3-css/w3.css";
import { Link } from "react-router-dom";

export default function Home() {

    function handleOnClick() {
      // validating & saving localization and criteria
      // TBD
      console.log("handleOnClick", null);
    }

    return (
        <>
            <div class="w3-content">
                <br/> <br/> <br/>
                <h1 class="w3-center w3-text-grey">This is home</h1>
                <h1 class="w3-center w3-text-grey">to specify localization of fotos</h1>
                <h1 class="w3-center w3-text-grey">and selection criterias</h1>
                <br/> <br/> <br/> <br/> <br/>
                <div className="w3-container w3-right">
                    <Link class="w3-button" to="/GridFotos">
                        <button class="w3-container" onClick={handleOnClick}>
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
} 