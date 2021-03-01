import HtmlGen from "../components/HtmlGen";
import cdnAPI from "../util/cdnjs";
import Checkbox from "../components/Checkbox";
import React, { useState, useEffect } from "react";
import CardResult from "../components/Card";



function HomePage() {
  const [displayItems, setDisplayItems] = useState([]);
  const [requestedItems, setRequestedItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [jQueryChecked, setJQueryChecked] = useState(false);
  const [jQueryURL, setJQueryURL] = useState("");
  const [matCSSChecked, setMatCSSChecked] = useState(false);
  const [matCSSURL, setMatCSSURL] = useState("");
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);
  // useEffect(() => {
  //   if (jQueryChecked) {
  //     cdnAPI
  //     .fetchJQuery().then((jQueryURL) => {
  //         setJQueryURL(jQueryURL);
  //     })
  //   }
  // }, [jQueryChecked]);
  // useEffect(() => {
  //   if (matCSSChecked) {
  //     cdnAPI
  //     .fetchJQuery().then((matCSSURL) => {
  //         setMatCSSURL(matCSSURL);
  //     })
  //   }
  // }, [matCSSChecked]);
  // useEffect(() => {
  //   display();
  //   console.log(requestedItems)
  // }, [requestedItems]);
  const preferencesChecked = [
    {
      name: "jQuery",
      key: "pref-jQuery",
      label: "jQuery",
    },
    {
      name: "materialize",
      key: "pref-materialize",
      label: "Materialize CSS",
    },
    {
      name: "bootstrap",
      key: "pref-bootstrap",
      label: "Bootstrap",
    },
    {
      name: "fontAwesome",
      key: "pref-fontAwesome",
      label: "Font Awesome",
    },
  ];
  function handleClick() {
    cdnAPI
      .multiple({
        jQuery: { requestedItems }, //need to change all true values to be determined by user input
        materializeCSS: { requestedItems },
        bootstrapCSS: { requestedItems },
        fontAwesome: { requestedItems },
      })
      .then((requests) => {
        console.log(requests);
        setRequestedItems(requests);
        setDisplayItems(requestedItems);
        console.log(requestedItems);
      });
  }
  function display() {
    if (checkedItems === true) {
      const newItemArray = [...requestedItems];
      const filterItem = newItemArray.filter((requestedItems) =>
        displayItems.push(requestedItems)
      );
      // console.log(filterItem);
      console.log("Filter Item" + filterItem);
    }
  }
  console.log({jQueryChecked, jQueryURL});
  console.log({matCSSChecked, matCSSURL})


  return (
    <div>
      <h1> Tag Generator</h1>
      {preferencesChecked.map((item) => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
          <CardResult />
        </label>
      ))}

      <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default HomePage;
