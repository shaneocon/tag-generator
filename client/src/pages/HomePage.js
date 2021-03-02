import cdnAPI from "../util/cdnjs";

import Checkbox from "../components/Checkbox";
import TemplateOutput from "../components/TemplateOutput";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [jQueryChecked, setJQueryChecked] = useState(false);
  const [jQueryURL, setJQueryURL] = useState("");

  const [matCSSChecked, setMatCSSChecked] = useState(false);
  const [matCSSURL, setMatCSSURL] = useState("");

  const [bootstrapChecked, setBootstrapChecked] = useState(false);
  const [bootstrapURL, setBootstrapURL] = useState("");

  const [fontAwesomeChecked, setFontAwesomeChecked] = useState(false);
  const [fontAwesomeURL, setFontAwesomeURL] = useState("");

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

  return (
    <div style={{backgroundColor: "lightblue"}} className="text-center mt-5">
      <label>STYLING FRAMEWORKS </label>{" "}
      <h2>Choose a Framework to Add!</h2>
      <br />
      <label style = {{marginRight: 20}}>
        jQuery
        <Checkbox
          name="jQuery"
          checked={jQueryChecked}
          onChange={(event) => setJQueryChecked(event.target.checked)}
        />
      </label>
      <label style = {{marginRight: 20}}>
        materializeCSS
        <Checkbox
          name="materializeCSS"
          checked={matCSSChecked}
          onChange={(event) => setMatCSSChecked(event.target.checked)}
        />
      </label>
      <label style = {{marginRight: 20}}>
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
    </div>
  );
}
export default HomePage;
