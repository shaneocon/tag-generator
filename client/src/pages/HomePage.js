import cdnAPI from "../util/cdnjs";
import Checkbox from "../components/Checkbox"
import React, { useState, useEffect } from "react";

function HomePage() {
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = (event) => {
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
  } 
  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  const preferencesChecked = [
    {
      name: "jQuery",
      key: "pref-jQuery",
      label: "jQuery"
    },
    {
      name: "materialize",
      key: "pref-materialize",
      label: "Materialize CSS"
    },
    {
      name: "bootstrap",
      key: "pref-bootstrap",
      label: "Bootstrap"
    },
    {
      name: "fontAwesome",
      key: "pref-fontAwesome",
      label: "Font Awesome"
    },
  ]

  function handleClick() {
    cdnAPI
      .multiple({
        jQuery: true,
        materializeCSS: true,
        bootstrapCSS: true,
        fontAwesome: true,
      })
      .then((requests) => {
        console.log(requests);
      });
  }

  return (
    <div>
    <label>Framework Preference : {checkedItems["check-box-1"]} </label> <br/>
    {
        preferencesChecked.map(item => (
            <label key={item.key}>
                {item.name}
                <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} onClick={handleClick} />
            </label>
        ))
    }
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