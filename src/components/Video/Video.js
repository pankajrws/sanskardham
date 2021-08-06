import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
function Video(props) {
  const [items, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchConfig = useCallback(async () => {
    try {
      var url = "https://sanskardhammumbai.com/wp-json/sanskardham_app/v1/videos_listing/47";
      // if(!props.hasOwnProperty(url)){
      //   url = props.url;
      // }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!. Cannot load data");
      }

      const data = await response.json();
      setItem(data.data);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  }, []);

  if (!isLoading) {
    // console.log(items);
  }

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  return (
    <div className="row m-0">
      {!isLoading &&
        !error &&
        items.map((d) => {
          return (
            <div className="rounded d-inline-block p-3 col-sm-6 col-md-3 border" key={d.id}>
              <Link to={"/videos/id/"+d.video_id} className="w-100 h-100">
                <img className="w-100" src={d.image_url} />
                <p>{d.title}</p>
              </Link>
            </div>
          );
        })}
      {isLoading && <h4>Loading...</h4>}
    </div>
  );
}

export default Video;
