import React from "react";

function ViharSuchna(props) {
  return (
    <div style={{ width: "100%", border: "2px solid black" }}>
      <p style={{ textAlign: "center" }}>{props.imageData.view_name}</p>
      {props.imageData.data.map((d) => {
        return (
          <div key={d.id} style={{ width: "15%", display: "inline-block", margin: "0% 2%" }}>
            <img src={d.image_url} style={{ width: "100%", borderRadius : "5px"}} />
          </div>
        );
      })}
    </div>
  );
}

export default ViharSuchna;
