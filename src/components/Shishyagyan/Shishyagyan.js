import React, { useState, useEffect, useCallback } from "react";

function Shishyagyan(props) {
  const [items, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchConfig = useCallback(async () => {
    try {
      var url = "https://sanskardhammumbai.com/wp-json/sanskardham_app/v1/shishyagan/1";
      // if(!props.hasOwnProperty(url)){
      //   url = props.url;
      // }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!. Cannot load data");
      }

      const data = await response.json();
      setItem(data.items);
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
    <div className="row m-0">
      {!isLoading && !error && items.map((d) => {
        return (
          <div className="rounded d-inline-block p-3 col-sm-6 col-md-3 border">
            <img className="w-100" src={d.field_image} />
            <p>{d.title}</p>
          </div>
        );
      })}
      {!isLoading && <h4>Items Loaded</h4>}
      {error && <h4>Some Error Occured!</h4>}
      {isLoading && <h4>Loading...</h4>}
    </div>
  );
}

export default Shishyagyan;
