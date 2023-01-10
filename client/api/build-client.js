import axios from "axios";

const BuildClient = ({ req }) => {
  if (typeof window === "undefined") {
    //We re on the server
    return axios.create({
      baseURL: "http://www.slowcookbarbeque.com",
      headers: req.headers,
    });
  } else {
    //We must be on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};
export default BuildClient;
