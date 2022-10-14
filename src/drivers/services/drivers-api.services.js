import axios from "axios";
export class DriversServices {
    BaseURL = "https://my-json-server.typicode.com/AbelCierto/innova-mind-json-server/drivers";
    NewsURL = "https://my-json-server.typicode.com/AbelCierto/innova-mind-json-server/driver-news";

    GetAll() {
        return axios.get(this.BaseURL);
    }
    Add(driver) {
        return axios.post(this.BaseURL, driver);
    }
    Modify(id, driver) {
        return axios.put(`${this.BaseURL}/${id}`, driver);
    }
    Delete(id) {
        return axios.delete(`${this.BaseURL}/${id}`);
    }
    GetDriversNews() {
        return axios.get(this.NewsURL);
    }
}
