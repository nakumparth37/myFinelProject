const API_KEY = "a6f8bce5e5bd986fd085d13c78420e53";

const requests = {

    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated ? api_key = ${ API_KEY }& language=en - US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchTv:`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie ? api_key = ${ API_KEY }& with_genres=10749`,
    fetchUpcoming:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    
    };

    export default requests;

    

    

    

    