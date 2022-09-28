import axios from "axios";
export class DriversServices {
    BaseURL = "http://localhost:3000/drivers";

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
}
