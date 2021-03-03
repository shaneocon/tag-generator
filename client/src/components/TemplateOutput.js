import buildTemplate from "../util/buildTemplate";

const textboxStyle= {
    width: "80%",
    height: "500px",
    margin: "10px",
    opacity: 1
  }

function TemplateOutput({ templateOptions }) {
    return <textarea readOnly style={textboxStyle} value={buildTemplate(templateOptions)}></textarea>
}

export default TemplateOutput;