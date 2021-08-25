import api from "./api"


export const create = (details) => {
    return api.post("/payments", details)
}