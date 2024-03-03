import "w3-css/w3.css";
import { imagesJSON } from "./imagesJSON.js";

export default function DataTable() {

 function Table () {
    <>
      <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>HashTags</th>
                <th>Image</th>
            </tr>
            {imagesJSON.map ( (image) => {
                return (
                    <tr>
                        <td>{image.id}</td>
                        <td>{image.date}</td>
                        <td>{image.hashtags}</td>
                        <td>{image.src}</td>
                    </tr>
                )
            })}
        </table>
      </div>
    </>
    };

  return (
    <>
      <div class="w3-container">
        <h1>Images Table</h1>
        <div class="w3-container">{Table}</div>
      </div>
    </>
  );
}