import axios from "axios";

const tok = 'user:cea9803a-8fbc-4cf2-b34e-ab1ff79375d6';
const hash = btoa(tok);

export const api = axios.create({
    baseURL:"http://localhost:8080/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        'Authorization': `Basic ${hash}`,
    }
})