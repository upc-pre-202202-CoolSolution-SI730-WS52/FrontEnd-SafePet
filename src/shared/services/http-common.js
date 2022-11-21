import axios from "axios";

export default axios.create({

  //baseURL: "https://safepet-fake-api.herokuapp.com",
  baseURL: "https://localhost:7283/api/v1",
  headers: { "Content-type": "application/json","authorization":`Bearer ${String(sessionStorage.getItem("JWT"))}`},


});

