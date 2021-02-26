import cdnAPI from "../util/cdnjs";

function HomePage() {
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
      <h1> Home</h1>
      <form>
      <div>
        <label>jQuery</label>
        <input type="checkbox" name="jQuery" required />
        <label>Materialize CSS</label>
        <input type="checkbox" name="materialize" required />
      </div>
      <div>
        <label>Bootstrap</label>
        <input type="checkbox" name="bootstrap" required />
      </div>
      <div>
        <label>Font Awesome</label>
        <input type="checkbox" name="fontAwesome" required/>
      </div>
      
      <button type="submit" onClick={handleClick}>Submit Preferences</button>
    </form>
       
    </div>
  );
}

export default HomePage;




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


//   return (
//       <div>
//           <lable>Checked item name : {checkedItems["check-box-1"]} </lable> <br/>
//           {
//               checkboxes.map(item => (
//                   <label key={item.key}>
//                       {item.name}
//                       <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} />
//                   </label>
//               ))
//           }
//       </div>
//   );
// }