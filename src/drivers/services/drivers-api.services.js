import axios from "axios";
export class DriversServices {
    BaseURL = "http://localhost:3000/drivers";
    NewsURL = "http://localhost:3000/driver-news";

    GetAll() {
        return axios.get(this.BaseURL);
    }
    GetDriverById(id) {
        return axios.get(`${this.BaseURL}/${id}`);
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
