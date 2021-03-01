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
  const [bootstrapChecked, setBootstrapChecked] = useState(false);
  const [bootstrapURL, setBootstrapURL] = useState("");
  const [fontAwesomeChecked, setFontAwesomeChecked] = useState(false);
  const [fontAwesomeURL, setFontAwesomeURL] = useState("");
  const handleChange = (event) => {
    // setCheckedItems({
    //   ...checkedItems,
    //   [event.target.name]: event.target.checked,
    // });
  };
  // useEffect(() => {
  //   console.log("checkedItems: ", checkedItems);
  // }, [checkedItems]);
  useEffect(() => {
    if (jQueryChecked) {
      cdnAPI
      .fetchJQuery().then((jQueryURL) => {
          setJQueryURL(jQueryURL);
      })
    }
  }, [jQueryChecked]);
  useEffect(() => {
    if (matCSSChecked) {
      cdnAPI
      .fetchMatCSS().then((matCSSURL) => {
          setMatCSSURL(matCSSURL);
      })
    }
  }, [matCSSChecked]);
  useEffect(() => {
    if (bootstrapChecked) {
      cdnAPI
      .fetchBootstrap().then((bootstrapURL) => {
          setBootstrapURL(bootstrapURL);
      })
    }
  }, [bootstrapChecked]);
  useEffect(() => {
    if (fontAwesomeChecked) {
      cdnAPI
      .fetchFontAwesome().then((fontAwesomeURL) => {
          setFontAwesomeURL(fontAwesomeURL);
      })
    }
  }, [fontAwesomeChecked]);
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
    // cdnAPI
    //   .multiple({
    //     jQuery: { requestedItems }, //need to change all true values to be determined by user input
    //     materializeCSS: { requestedItems },
    //     bootstrapCSS: { requestedItems },
    //     fontAwesome: { requestedItems },
    //   })
    //   .then((requests) => {
    //     console.log(requests);
    //     setRequestedItems(requests);
    //     setDisplayItems(requestedItems);
    //     console.log(requestedItems);
    //   });
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
  console.log({bootstrapChecked, bootstrapURL})
  return (
    <div>
      <label>Choose from the frameworks below to add to your page! </label> <br />
      <label>
        jQuery
        <Checkbox
          name="jQuery"
          checked={jQueryChecked}
          onChange={(event) => setJQueryChecked(event.target.checked)}
        />
        {/* <CardResult /> */}
      </label>
      <label>
        materializeCSS
        <Checkbox
          name="materializeCSS"
          checked={matCSSChecked}
          onChange={(event) => setMatCSSChecked(event.target.checked)}
        />
        {/* <CardResult /> */}
      </label>
      <label>
        Bootstrap
        <Checkbox
          name="bootstrap"
          checked={bootstrapChecked}
          onChange={(event) => setBootstrapChecked(event.target.checked)}
        />
        {/* <CardResult /> */}
      </label>
      <label>
        Font Awesome
        <Checkbox
          name="fontAwesome"
          checked={fontAwesomeChecked}
          onChange={(event) => setFontAwesomeChecked(event.target.checked)}
        />
        {/* <CardResult /> */}
      </label>
{/* 
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
      ))} */}
      {(jQueryChecked && jQueryURL ) && <p>{jQueryURL}</p>}
      {(matCSSChecked && matCSSURL ) && <p>{matCSSURL}</p>}
      {(bootstrapChecked && bootstrapURL ) && <p>{bootstrapURL}</p>}
      {(fontAwesomeChecked && fontAwesomeURL ) && <p>{fontAwesomeURL}</p>}
    </div>
  );
}
export default HomePage;
// ====== STACK OVERFLOW EXAMPLE ====== //
// const CheckboxExample = () => {
//   const [checkedItems, setCheckedItems] = useState({}); //plain object as state
//   const handleChange = (event) => {
//       // updating an object instead of a Map
//       setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
//   }
//   useEffect(() => {
//     console.log("checkedItems: ", checkedItems);
//   }, [checkedItems]);
//   const checkboxes = [
//       {
//           name: 'check-box-1',
//           key: 'checkBox1',
//           label: 'Check Box 1',
//       },
//       {
//           name: 'check-box-2',
//           key: 'checkBox2',
//           label: 'Check Box 2',
//       }
//   ];
// return (
// );
// }
// ===================================== //
// ======= previous form ============== //
// <div>
//       <h1> Home</h1>
//       <form>
//       <div>
//         <label>jQuery</label>
//         <input type="checkbox" name="jQuery" required />
//         <label>Materialize CSS</label>
//         <input type="checkbox" name="materialize" required />
//       </div>
//       <div>
//         <label>Bootstrap</label>
//         <input type="checkbox" name="bootstrap" required />
//       </div>
//       <div>
//         <label>Font Awesome</label>
//         <input type="checkbox" name="fontAwesome" required/>
//       </div>
//       <button type="submit" onClick={handleClick}>Submit Preferences</button>
//     </form>
//     </div>
