import cdnAPI from "../util/cdnjs";



function HomePage() {
  function handleClick() {
    cdnAPI.multiple(
      {jQuery: true,
        materializeCSS: true,
        bootstrapCSS: true,
        fontAwesome: true
    }).then((requests) => {
      console.log(requests)
    });
  }

  return (
    <div>
      <h1> Home</h1><button onClick={handleClick}>submit</button>
    </div>
  )
}

export default HomePage;
