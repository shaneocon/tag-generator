import axios from "axios";
import { keys, zipObject, values } from "lodash";
const asyncAllValues = async (object) => {
  return zipObject(keys(object), await Promise.all(values(object)))
}
let jQuery = "https://api.cdnjs.com/libraries/jquery?fields=latest";
let matCSS = "https://api.cdnjs.com/libraries/materialize?fields=latest";
let bootstrap = "https://api.cdnjs.com/libraries/twitter-bootstrap?fields=latest";
let fontAwesome = "https://api.cdnjs.com/libraries/font-awesome?fields=latest";
const cdnAPI = {
  multiple: function (preferences) {
    const requests = {};
    if (preferences.jQuery) {
      requests.jQuery = axios.get(jQuery).then(res => res.data.latest);
    }
    if (preferences.materializeCSS) {
      requests.materializeCSS = axios.get(matCSS).then(res => res.data.latest)
    }
    if (preferences.bootstrapCSS) {
      requests.bootstrapCSS = axios.get(bootstrap).then(res => res.data.latest);
    }
    if (preferences.fontAwesome) {
      requests.fontAwesome = axios.get(fontAwesome).then(res => res.data.latest);
    }
    return asyncAllValues(requests);
    //   return requests;
    // }).then(responses => {
    //   console.log(responses);
    //   const obj = {};
//  for (const key of responses) {
//       obj[key] = ;
//  }
    // } );
  },
  fetchJQuery() {
    return axios.get(jQuery).then(res => res.data.latest);
  },
  fetchMatCSS() {
    return axios.get(matCSS).then(res => res.data.latest);
  }, 
  fetchBootstrap() {
    return axios.get(bootstrap).then(res => res.data.latest);
  }, 
  fetchFontAwesome() {
    return axios.get(fontAwesome).then(res => res.data.latest);
  }, 
};
export default cdnAPI;
