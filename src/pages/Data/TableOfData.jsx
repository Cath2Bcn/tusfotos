import "w3-css/w3.css";
import { imagesJSON } from "./imagesJSON.js";

export default function TableOfData() {
  const renderData = imagesJSON.map ( (image) => (
    <>
      <div class="w3-card-4" style={{ width: "50%" }}>
        <header class="w3-container w3-sand">
          <h3>Image Id: {image.id}</h3>
        </header>
        <br />
        <div class="w3-container">Date: {image.date}</div>
        <div class="w3-container">Src: {image.src}</div>
        <div class="w3-container">Hashtags:<br/>
         {image.hashtags.map ( (hashtag) => ( <><span>{hashtag.hashtag}</span></>))  }</div>
        <br />
        <footer class="w3-container w3-black">
          <h5>Footer Image</h5>
        </footer>
      </div>
      <br />
    </>
  ));


  console.log("renderdata", renderData);


  return (
    <>
      <div class="w3-container">
        <h1>Images List</h1>
        <div class="w3-container">{renderData}</div>
      </div>
    </>
  );
}