import axios from "axios";

const TOKEN = "cd7u33qad3i5m9qvgkg0cd7u33qad3i5m9qvgkgg";

export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token:TOKEN
    }

})

// /quote?symbol=AAPL&token=