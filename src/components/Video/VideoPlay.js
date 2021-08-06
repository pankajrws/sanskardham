import React from "react";

function VideoPlay() {
  var url = window.location.href.split("/");
  const video_id =url[url.length-1];
  return (
    <div className="row m-0 p-5 d-flex justify-content-center align-items-center">
    <div className="col-sm-9">
    <div className="" style={{position: "relative", paddingBottom: "56.25%", height: "0"}}>
      <iframe className="" style={{position: "absolute", top: "0",	left: "0", width: "100%",height: "100%"}} src={"https://www.youtube.com/embed/"+video_id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    </div>
  );
}

export default VideoPlay;
