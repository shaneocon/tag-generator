function buildScriptTag(src) {
    if (src) {
        return `<script src="${src}"></script>`
    }
    return ""
}

function buildTemplate(answers) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${buildScriptTag(answers.bootstrap)}
    ${buildScriptTag(answers.materializeCSS)}
    ${buildScriptTag(answers.fontAwesome)}
</head>

<body>
    <!-- Add your code here -->
    ${buildScriptTag(answers.jQuery)}
</body>

</html>`.trim();

};



export default buildTemplate;