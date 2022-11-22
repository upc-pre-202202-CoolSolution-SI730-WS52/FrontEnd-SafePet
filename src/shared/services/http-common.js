import axios from "axios";

export default axios.create({

  baseURL: "https://safepet-web-services.herokuapp.com/api/v1",
  headers: { "Content-type": "application/json","authorization":`Bearer ${String(sessionStorage.getItem("JWT"))}`},

});

