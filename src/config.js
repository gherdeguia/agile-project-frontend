const prod = {
 url: {
 API_URL: "https://cine-q-backend-prod.herokuapp.com/",
 },
};

const staging = {
 url: {
 API_URL: "https://cine-q-backend.herokuapp.com/",
 },
};

const dev = {
 url: {
 API_URL: "http://localhost:8080",
 },
};

let config = dev;
if(process.env.NODE_ENV === 'staging') {
    config = staging
}
else if(process.env.NODE_ENV === 'production'){
    config = prod
};

export default config;