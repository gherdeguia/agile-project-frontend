import api from "./api"

export const getScreeningTime = (cinemaId, movieName) => {
    return api.get(`/screenings/${cinemaId}/${movieName}`);
}