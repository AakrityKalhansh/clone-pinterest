import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID jFdNg1c1MO7uVvtm_y-1xZctCtH5RYyjgJPpgJoQArE"

    }
})