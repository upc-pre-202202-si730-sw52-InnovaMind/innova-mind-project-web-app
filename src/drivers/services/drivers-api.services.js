import axios from "axios";
export class DriversServices {
    BaseURL = "http://localhost:3000/drivers";
    NewsURL = "http://localhost:3000/driver-news";
    JobsURL = "http://localhost:3000/jobsdrivers";

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
    Getdriver(id) {
        return axios.get(`${this.BaseURL}/${id}`);
    }
    GetJobsDriver(id) {
        return axios.get(`${this.JobsURL}?idUser=${id}`);
    }
}
