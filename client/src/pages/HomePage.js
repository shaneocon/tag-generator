import cdnAPI from "../util/cdnjs";
import API from "../util/API";

import Checkbox from "../components/Checkbox";
import TemplateOutput from "../components/TemplateOutput";

import { useAuth } from "../util/authContext";

import React, { useState, useEffect, useLayoutEffect } from "react";
import PreferencesButton from "../components/Button";




function HomePage() {
  let auth = useAuth();

  const [jQueryChecked, setJQueryChecked] = useState(false);
  const [jQueryURL, setJQueryURL] = useState("");

  const [matCSSChecked, setMatCSSChecked] = useState(false);
  const [matCSSURL, setMatCSSURL] = useState("");

  const [bootstrapChecked, setBootstrapChecked] = useState(false);
  const [bootstrapURL, setBootstrapURL] = useState("");

  const [fontAwesomeChecked, setFontAwesomeChecked] = useState(false);
  const [fontAwesomeURL, setFontAwesomeURL] = useState("");

  const preferences = {
    jQuery: jQueryChecked,
    materializeCSS: matCSSChecked,
    bootstrapCSS: bootstrapChecked,
    fontAwesome: fontAwesomeChecked,
  };

  useEffect(() => {
    if (jQueryChecked) {
      cdnAPI.fetchJQuery().then((jQueryURL) => {
        setJQueryURL(jQueryURL);
      });
    }
  }, [jQueryChecked]);

  useEffect(() => {
    if (matCSSChecked) {
      cdnAPI.fetchMatCSS().then((matCSSURL) => {
        setMatCSSURL(matCSSURL);
      });
    }
  }, [matCSSChecked]);

  useEffect(() => {
    if (bootstrapChecked) {
      cdnAPI.fetchBootstrap().then((bootstrapURL) => {
        setBootstrapURL(bootstrapURL);
      });
    }
  }, [bootstrapChecked]);

  useEffect(() => {
    if (fontAwesomeChecked) {
      cdnAPI.fetchFontAwesome().then((fontAwesomeURL) => {
        setFontAwesomeURL(fontAwesomeURL);
      });
    }
  }, [fontAwesomeChecked]);

  function handleSavePreferences() {
    API.savePreferences(preferences).catch((err) => {
      console.log(err);
    });

    console.log("The link was clicked.");
  }

  useEffect(() => {
    if (auth.isLoggedIn) {
      API.getUser().then((res) => {
        if (res.data.preferences.jQuery === true) {
          setJQueryChecked(true);
        }
        if (res.data.preferences.materializeCSS === true) {
          setMatCSSChecked(true);
        }
        if (res.data.preferences.bootstrapCSS === true) {
          setBootstrapChecked(true);
        }
        if (res.data.preferences.fontAwesome === true) {
          setFontAwesomeChecked(true);
        }
        console.log(res.data.preferences);
      });
    }
  }, []);


  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  
  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
  }

  // useEffect(() => {
  //   if (auth.isLoggedIn) {
  //     API.getUser().then((res) => {
  //       setMatCSSChecked(res);
  //       // console.log(res.data)
  //     })

  //    }
  // }, []);

  return (
    <div style={{ backgroundColor: "#bbbbbbed" }} className="text-center mt-5">
      <label>STYLING FRAMEWORKS </label>{" "}
      <h2>Choose a Framework to Add!</h2>
      <br />
      <label style = {{marginRight: 20 }}>
        jQuery
        <Checkbox
          name="jQuery"
          checked={jQueryChecked}
          onChange={(event) => setJQueryChecked(event.target.checked)}
        />
      </label>
      <label style = {{marginRight: 20 }}>
        materializeCSS
        <Checkbox
          name="materializeCSS"
          checked={matCSSChecked}
          onChange={(event) => setMatCSSChecked(event.target.checked)}
        />
      </label>
      <label style = {{marginRight: 20 }}>
        Bootstrap 
        <Checkbox
          name="bootstrap"
          checked={bootstrapChecked}
          onChange={(event) => setBootstrapChecked(event.target.checked)}
        />
      </label>
      <label>
        Font Awesome 
        <Checkbox
          name="fontAwesome"
          checked={fontAwesomeChecked}
          onChange={(event) => setFontAwesomeChecked(event.target.checked)}
        />
      </label>
      <TemplateOutput 
        templateOptions={{
          jQuery: jQueryChecked ? jQueryURL : "",
          materializeCSS: matCSSChecked ? matCSSURL : "",
          bootstrap: bootstrapChecked ? bootstrapURL : "",
          fontAwesome: fontAwesomeChecked ? fontAwesomeURL : "",
        }}
      />
      <PreferencesButton style = {{marginBottom: 20 }}
      onClick={handleSavePreferences} />
    </div>
  );
}
export default HomePage;

// ==== onClick for Preferences Button, if necessary?? ==== //
// onClick={handleSavePreferences}
