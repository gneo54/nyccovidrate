// helper.js
import axios from 'axios';

// CORS enabled apikey
const apikey = 'f520d97958136bfe05e464c4ec9af3da15dcd';

// Autotrade delay
//const trade_delay = 10000; // millis

// REST endpoint
let restdb = axios.create({
    baseURL: 'https://reactrealtime-6683.restdb.io',
    timeout: 1000,
    headers: { 'x-apikey': apikey }
});
// Eventsource endpoint
//const realtimeURL = `https://reactrealtime-6683.restdb.io/rest?apikey=${apikey}`

export { apikey, restdb };