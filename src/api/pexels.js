import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.pexels.com',
    headers: {
        Authorization: '563492ad6f91700001000001c99e1147f29f4037b207b53fbe027dbd'
    }
})


 