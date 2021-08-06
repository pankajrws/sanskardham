import React, { useState, useEffect, useCallback } from "react";
import CarouselLoader from "./CarouselLoader";
import ViharSuchna from "./ViharSuchna";
import VideoPrabachan from "./VideoPrabachan";
import ELibrary from "./ELibrary";
import Gallery from "./Gallery";


function Home(props) {
  const [items, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchConfig = useCallback(async () => {
    try {
      const response = await fetch(props.url);
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

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

// if(!isLoading){
//   console.log(items.node);
// }

  return (
    <div>
      {!isLoading && !error && <CarouselLoader imageData={items.node[0].data}/>}
      {!isLoading && !error && <ViharSuchna imageData={items.node[1]}/>}
      {!isLoading && !error && <VideoPrabachan imageData={items.node[2]}/>}
      {!isLoading && !error && <ELibrary imageData={items.node[3]}/>}
      {!isLoading && !error && <Gallery imageData={items.node[4]}/>}
      {isLoading && <p>Loading...</p>}
      {error && <p>Some Error Occured!</p>}
    </div>
  );
}

export default Home;
