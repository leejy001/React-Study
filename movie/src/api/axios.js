import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "852cdaf61c9c34aa2a81afec92cc29b0",
    language: "ko-KR",
    region: "KR"
  }
});

export default instance;
