import axios from "axios";
const apiKey = "2d4d3c06";
export function searchMoviesRequest(query) {
  return axios.get(`http://www.omdbapi.com/?s=${query}&apikey=2d4d3c06`);
}

export function getMovieDetailsRequest(id) {
  return axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
}
