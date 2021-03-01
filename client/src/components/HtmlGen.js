import { Link } from "react-router-dom";


function HtmlGen(answers) {
    return  `

## HTML Name
<h1 align="center">${answers.htmlName}</h1>
## Description
<h3 align="center">${answers.describe}</h3>
            <p>
               <textarea>Text Generates Here</textarea>
               <p>${answers.jquery}</p>
               <p>${answers.bootstrap}</p>
               <p>${answers.materialize}</p>
               <p>${answers.fontawesome}</p>

            </p>
         </div> 
 `;

  };

  <Link to="/login" className="nav-item nav-link">Login</Link>

  export default HtmlGen;
