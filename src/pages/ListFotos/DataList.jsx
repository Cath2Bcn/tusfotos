import "w3-css/w3.css";
import { imagesJSON } from "../../Data/imagesJSON.js";

export default function DataList() {
  const renderData = imagesJSON.map ( (image) => (
    <>
      <div class="w3-card-4" style={{ width: "100%" }}>
        <header class="w3-container w3-sand">
          <h3>Image Id: {image.id}</h3>
        </header>
        <br />
        <div className="w3-container">
          <div className="w3-twothird">
            <div class="w3-container">Date: {image.date}<br/><br/></div>
            <div class="w3-container">Source file: {image.src} <br/><br/></div>
            <div class="w3-container">Hashtags:<br/>
            {image.hashtags.map ( (hashtag) => ( <><span>- {hashtag.hashtag}</span><br/></>))  }</div>
            <br />
          </div>
          <div class="w3-third">
              <img 
                className="w3-container"
                src={image.src}
                alt={image.src}
                width={200}
              />
          </div>
        </div>
      </div>
      <br />
    </>
  ));


  //console.log("renderdata", renderData);


  return (
    <>
      <div class="w3-container">
        <h1>Images List</h1>
        <div class="w3-container">{renderData}</div>
      </div>
    </>
  );
}