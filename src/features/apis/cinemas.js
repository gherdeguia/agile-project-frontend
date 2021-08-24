
import api from "./api"

export const getCinemas = () => {
    console.log(process.env);
    return api.get("/cinemas");
}
