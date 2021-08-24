import api from "./api"

export const getCinemas = () => {
    return api.get("/cinemas");
}
