import React, { useCallback, useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
// import "fancyapps/ui/dist/fancybox.css";

function ImageGallery() {
  var url = window.location.href.split("/");
  const gallery_id = url[url.length - 1];

  const [items, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fetchConfig = useCallback(async () => {
    try {
      var url = "https://sanskardhammumbai.com/wp-json/sanskardham_app/v1/photo_consumption/" + gallery_id;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!. Cannot load data");
      }

      const data = await response.json();
      setItem(data);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  }, []);

  if (!isLoading) {
    console.log(items);
  }

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  return (
    <div>
      {/* {!isLoading &&
        !error &&
        items.media.map((d) => {
          return (
            <div className="w-25 p-3 d-inline-block">
              <img className="w-100" src={d.image_url} />
            </div>
          );
        })} */}
      <Fancybox options={{ infinite: false }}>
        <p>
          <button data-fancybox="gallery" data-src="https://lipsum.app/id/1/800x600" className="button button--secondary">
            Image #1
          </button>

          <button data-fancybox="gallery" data-src="https://lipsum.app/id/2/800x600" className="button button--secondary">
            Image #2
          </button>
        </p>
      </Fancybox>
      {isLoading && <h4>Loading...</h4>}
    </div>
  );
}

export default ImageGallery;
