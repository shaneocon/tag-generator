import buildTemplate from "../util/buildTemplate";

const textboxStyle= {
    width: "620px",
    height: "550px"
  }

function TemplateOutput({ templateOptions }) {
    return <textarea readOnly style={textboxStyle} value={buildTemplate(templateOptions)}></textarea>
}

export default TemplateOutput;