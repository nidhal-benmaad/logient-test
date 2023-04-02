import axios from "axios";

export function searchMoviesRequest(query) {
  return axios.get(`http://www.omdbapi.com/?s=${query}&apikey=2d4d3c06`);
}

export function getMovieDetailsRequest(id) {
  return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=2d4d3c06`);
}
