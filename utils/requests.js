import API_KEY from '../keys';

export default{
  fetchTrending:{
    title: 'Trending',
    url: `/trending/all/week?api_key=38d5c00fbca9b6d938537954c6e7527c&language=en-US`,
  },
  fetchTopRated:{
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=38d5c00fbca9b6d938537954c6e7527c&language=en-US`,
  },
  fetchActionMovies:{
    title: 'Action',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=28`,
  },
  fetchComedyMovies:{
    title: 'Comedy',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=35`,
  },
  fetchHorrorMovies:{
    title: 'Horror',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=27`,
  },
  fetchRomanceMovies:{
    title: 'Romance',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=10749`,
  },
  fetchMystery:{
    title: 'Mystery',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=9648`,
  },
  fetchSciFi:{
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=878`,
  },
  fetchWestern:{
    title: 'Western',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=37`,
  },
  fetchAnimation:{
    title: 'Animation',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=16`,
  },
  fetchTV:{
    title: 'TV Movie',
    url: `/discover/movie?api_key=38d5c00fbca9b6d938537954c6e7527c&with_genres=10770`,
  },
}