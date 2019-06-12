import axios from "axios";
import xhrAdapter from "axios/lib/adapters/xhr";
import httpAdapter from "axios/lib/adapters/http";

let adapter = xhrAdapter;
if (typeof XMLHttpRequest === "undefined") {
  // For browsers use XHR adapter
  adapter = httpAdapter;
}

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.pexels.com",
  headers: {
    Authorization: "563492ad6f91700001000001c99e1147f29f4037b207b53fbe027dbd"
  },
  adapter: adapter
});
