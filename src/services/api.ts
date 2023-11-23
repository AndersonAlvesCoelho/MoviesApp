import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', 
});

api.interceptors.request.use(config => {
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI1MDk2ODVhMTE1OTMyZWJhOTdlZTQxN2YxYzViOCIsInN1YiI6IjY1MmVjYTUwYTgwMjM2MDExYWM3OWY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqFK0n_TtA36EZn_G3SYeR4RRFHIvifatjjDyMrLelo';
  if (apiKey) {
    config.headers.Authorization = `Bearer ${apiKey}`;
  }
  return config;
});


export default api;
