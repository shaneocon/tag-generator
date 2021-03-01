import { Link } from "react-router-dom";


function HtmlGen() {
    return (
<section>
<div className="row">
   <div className="col-4">
   </div>
   <div className="col">
      <h2>HTML Generator</h2>
      <div className="row">
         <br />
         <div className="col-6">
            <p>
               <h2>Here it is:</h2>
               <textarea>Text Generates Here</textarea>
               <a class="button" href="https://www.google.com" target="_blank">Google!</a>

               <Link to="/login" className="nav-item nav-link">Login</Link>
            </p>
         </div>
      </div>
   </div>
</div>
</section>
    );
  }

  export default HtmlGen;
