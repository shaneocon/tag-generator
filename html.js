const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const createHtml = require("./HtmlGen")
const writeFileAsync = util.promisify(fs.writeFile);


function askMe () {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please provide the title name',
            name: 'htmlName',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "Name your project!!";
                }
              },
        },
        {
            type: 'input',
            message: 'Please enter a short application description',
            name: 'describe',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "You need to be more descriptive.";
                }
              },
        },
        {
            type: 'input',
            message: 'Link to application here',
            name: 'linkMe',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "Please re-enter that information? PLEASE?";
                }
              },
        },
        {
            type: 'list',
            message: 'Link in jQuery?',
            name: 'jquery',
            choices: [
                '<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>',
                'none'
            ],
        },
        {
            type: 'list',
            message: 'Link in Bootstrap?',
            name: 'bootstrap',
            choices: [
                '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">',
                'none'
               
            ],
        },
        {
            type: 'list',
            message: 'Link in Materialize?',
            name: 'materialize',
            choices: [
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css">',
                'none'
            ],
        },
        {
            type: 'list',
            message: 'Link in Font-Awesome?',
            name: 'fontawesome',
            choices: [
                '<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">',
                'none'
            ],
        },
    ])
}

module.exports = createHtml;

 // Async function using util.promisify 
 async function promisify() {
    try {
        // Ask user questions and generate responses
        const answers = await askMe();
        const generateContent = HtmlGen(answers);
        // Write new HtmlGen.md to dist directory
        await writeFileAsync('./readwrite/htmlGen.md', generateContent);
        console.log(' Successfully wrote information to htmlGen.md!!');
    }   catch(err) {
        console.log(err);
    }
  }
  
  promisify();  


