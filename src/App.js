import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contactus from "./components/ContactUs/ContactUs";
import Elibrary from "./components/Elibrary/ELibrary";
import Gallery from "./components/Gallery/Gallery";
import ImageGallery from "./components/Gallery/ImageGallery";
import Home from "./components/Home/Home";
import SideNav from "./components/Navigation/SideNav";
import Shishyagyan from "./components/Shishyagyan/Shishyagyan";
import Video from "./components/Video/Video";
import VideoPlay from "./components/Video/VideoPlay";

function App() {
  const [items, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [activePage, setActivePage] = useState("Home");

  const fetchConfig = useCallback(async () => {
    try {
      const response = await fetch("https://sanskardhammumbai.com/wp-json/sanskardham_app/v1/config");
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

  // function changePageHandler(changeItem) {
  //   setActivePage(changeItem);
  // }

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  if (!isLoading) {
    console.log(items);
  }

  const [menuLink, setMenuLink] = useState("");

  function getMenuLink(menulink){
    setMenuLink(menulink);
  }

  return (
    <div id="body-pd">
      <Router>
        {<SideNav url={items.side_menu} onMenuChange={getMenuLink}/>}
        {/* <Navigation onPageChange={changePageHandler}/> */}
        <Switch>
          <Route exact path="/">{!isLoading && !error && <Home url={items.home} />}</Route>
          <Route exact path="/videos">{!isLoading && !error && <Video url={""} />}</Route>
          <Route path="/videos/id/"><VideoPlay /></Route>
          <Route exact path="/gallery">{!isLoading && !error && <Gallery url={""}/>}</Route>
          <Route path="/gallery/id/"><ImageGallery url={""}/></Route>
          <Route exact path="/e-library">{!isLoading && !error && <Elibrary url={""}/>}</Route>
          <Route exact path="/shishyagyan">{!isLoading && !error && <Shishyagyan url={""}/>}</Route>
          <Route exact path="/contact">{!isLoading && !error && <Contactus contact_us_url={items.contact_us} contact_us_form_mobile={items.contact_us_form_mobile} />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
