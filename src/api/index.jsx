import axios from "axios";

const api = axios.create({
    baseURL: "https://yt-api.p.rapidapi.com",
    params: {
        geo: "TR",
        lang: "tr",
    },
    headers: {
        'x-rapidapi-key': '95ad9bd07amsh2bcb3d91a4a20c0p1869f9jsne71dbe1975ad',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
});

export default api;