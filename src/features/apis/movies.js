import api from "./api"

export const getMovies = () => {
    return api.get("/movies");
}

export const getTrendingMovies = () => {
    return api.get("/movies/trending")
}