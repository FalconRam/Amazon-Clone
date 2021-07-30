import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/challenge-518a5/us-central1/api",
});

export default instance;
