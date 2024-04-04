import axios from 'axios';
import { Notify } from 'notiflix';
const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '43596775cda6588db61d2519acdb98b6'; // персональний ключ\

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};

export async function fetchMovies(endPoint) {
    const url = `${baseURL}${endPoint}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data

}

export async function fetchSearhMovies(endPoint, query) {
  const url = `${baseURL}${endPoint}?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieDetails(endPoint, movieId) {
  const url = `${baseURL}${endPoint}/${movieId}?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieCast(endPoint, movieId) {
   const url = `${baseURL}${endPoint}/${movieId}/credits?api_key=${API_KEY}`;
   const response = await axios.get(url);
   return response.data;
}

export async function fetchMovieReviews(endPoint, movieId) {
  const url = `${baseURL}${endPoint}/${movieId}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}




export function onFetchError () {
    Notify.failure('Oops! Something went wrong! Try reloading the page', {
      position: 'center-center',
      timeout: 3000,
      width: '400px',
      fontSize: '24px',
    }); 
}