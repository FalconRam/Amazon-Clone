import axios from 'axios';

export const instance = axios.create({
  baseUrl: "http://localhost:5001/challenge-518a5/us-central1/api",
});