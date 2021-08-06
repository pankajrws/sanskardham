import React from "react";

function Gallery(props) {
  return (
    <div style={{ width: "100%", border: "2px solid black" }}>
      <p style={{ textAlign: "center" }}>{props.imageData.view_name}</p>
      {props.imageData.data.map((d) => {
        return (
          <div key={d.id} style={{ width: "15%", display: "inline-block", margin: "0% 2%"}}>
            <img src={d.field_image} style={{ width: "100%", borderRadius : "5px"}} />
            <p>{d.title}</p>
            <p>{d.updatedTime}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
