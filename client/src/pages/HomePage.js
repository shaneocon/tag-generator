import cdnAPI from "../util/cdnjs";
import API from "../util/API";

import Checkbox from "../components/Checkbox";
import TemplateOutput from "../components/TemplateOutput";

import { useAuth } from "../util/authContext";

import React, { useState, useEffect } from "react";
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

  const [preferences, setPreferences] = useState({
    materializeCSS: false,
    jQuery: false,
    bootstrapCSS: false,
    fontAwesome: false
  });

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

  // function handleSavePreferences(event) {
  //   event.preventDefault();
  //   API.postPreferences({
  //     jQuery: preferences.jQuery,

  //   }).then(() => {API.getPreferences()})

  //   console.log('The link was clicked.');
  // }
  useEffect(() => {
    // if (auth.isLoggedIn) {
      API.postPreferences({
        jQuery: preferences.jQuery,
        materializeCSS: preferences.materializeCSS,
        bootstrapCSS: preferences.bootstrapCSS,
        fontAwesome: preferences.fontAwesome
      }).then((res) => {
        console.log("HELLO")
        setPreferences(res);
      })

    // }
  }, []);

  return (
    <div>
      <label>Choose from the frameworks below to add to your page! </label>{" "}
      <br />
      <label>
        jQuery
        <Checkbox
          name="jQuery"
          checked={jQueryChecked}
          onChange={(event) => setJQueryChecked(event.target.checked)}
        />
      </label>
      <label>
        materializeCSS
        <Checkbox
          name="materializeCSS"
          checked={matCSSChecked}
          onChange={(event) => setMatCSSChecked(event.target.checked)}
        />
      </label>
      <label>
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
          jQuery:  jQueryChecked ? jQueryURL : "",
          materializeCSS: matCSSChecked ? matCSSURL : "",
          bootstrap: bootstrapChecked ? bootstrapURL : "",
          fontAwesome: fontAwesomeChecked ? fontAwesomeURL : ""
        }}
      />

      <PreferencesButton />
    </div>

  );
}
export default HomePage;


// ==== onClick for Preferences Button, if necessary?? ==== //
// onClick={handleSavePreferences}