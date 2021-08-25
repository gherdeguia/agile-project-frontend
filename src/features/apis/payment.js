import api from "./api"


export const createPayment = (details) => {
    return api.post("/payments", details)
}