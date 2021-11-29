import axios from "axios";

export default axios.create({
    baseURL: "http://worktrail.herokuapp.com/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});