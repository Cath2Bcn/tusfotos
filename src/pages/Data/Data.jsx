import "w3-css/w3.css";
import { imagesJSON } from "../../img/imagesJSON.js";

export default function Data() {
/*   const renderData = imagesJSON.map((image) => (
    <>
      <div class="w3-card-4" style={{ width: "50%" }}>
        <header class="w3-container w3-sand">
          <h3>Id: {image.id}</h3>
        </header>
        <br />
        <div class="w3-container">
          Scr: {image.src}, 
          Date: {image.date}
        </div>
        <div class="w3-container">Hashtags:<br/>
         {image.hashtags.map ( (hashtag) => ( <><span>{hashtag.hashkey}:{hashtag.hashvalue}, </span></>))  }</div>
        <br />
        <footer class="w3-container w3-black">
          <h5>end of foto</h5>
        </footer>
      </div>
      <br />
    </>
  )); */

  return (
    <>
      <div class="w3-container">
            <h1>Images List</h1>
            <div class="w3-container">
                { imagesJSON.map((image) => (
                    <>
                        <h3>Id: {image.id}</h3>
                        <br />
                    </>
                ))}
            </div>
      </div>
    </>
  );
}