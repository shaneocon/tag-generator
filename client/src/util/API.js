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
  savePreferences: ({ jQuery, materializeCSS, bootstrapCSS, fontAwesome }) => {
    return axios.put("/api/user/preferences", {
      jQuery,
      materializeCSS,
      bootstrapCSS,
      fontAwesome
    });
  }
};


export default API;
