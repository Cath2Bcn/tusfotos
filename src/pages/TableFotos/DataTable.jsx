import "w3-css/w3.css";
import { imagesJSON } from "../../Data/imagesJSON.js";

export default function DataTable() {

 const renderData = imagesJSON.map ( (image) => (
    <>
      <tr>
          <td>{image.id}</td>
          <td>{image.date}</td>
          <td>
            {image.hashtags.map((hashtag) => (
              <>
                <span>{hashtag.hashtag}</span>
                <br/>
              </>
            ))}
          </td>
          <td>{image.src}</td>
          <td>
            <img 
              src={image.src}
              alt={image.src}
              width={100}
            />
          </td>
      </tr>
                
    </>
    ));

  return (
    <>
      <div class="w3-container">
        <h1>Images Table</h1>
        <table class="w3-table w3-bordered w3-hoverable w3-border w3-card">
          <tr class="w3-sand">
            <th>Id</th>
            <th>Date</th>
            <th>HashTags</th>
            <th>Origin</th>
            <th>Image</th>
          </tr>
          {renderData}
        </table>
      </div>
    </>
  );
}