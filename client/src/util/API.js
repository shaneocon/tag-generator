import axios from "axios";


const API = {
  // Gets a single user by id
  getUser: () => {
    return axios.get("/api/user");
  },
  // sign up a user to our service
  signUpUser: ({ email, password }) => {
    return axios.post("/api/signup", {
      email,
      password
    });
  },
  getPreferences: ({ materializeCSS, jQuery, bootstrapCSS, fontAwesome }) => {
    return axios.get("/api/user/preferences", {
      materializeCSS,
      jQuery,
      bootstrapCSS,
      fontAwesome
    });
  },
  postPreferences: ({ materializeCSS, jQuery, bootstrapCSS, fontAwesome }) => {
    return axios.post("/api/user/preferences", {
      materializeCSS,
      jQuery,
      bootstrapCSS,
      fontAwesome
    });
  }
};


export default API;
