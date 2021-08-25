import api from "./api"

export const getScreeningTime = () => {
    return api.get("/screening");
}