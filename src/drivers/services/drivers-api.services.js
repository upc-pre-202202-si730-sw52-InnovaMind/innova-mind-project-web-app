import axios from "axios";
export class DriversServices {
    BaseURL = "http://localhost:3000/drivers";
    NewsURL = "http://localhost:3000/driver-news";
    UsersURL= "http://localhost:3000/users";

    GetAll() {
        return axios.get(this.BaseURL);
    }
    Add(driver) {
        return axios.post(this.BaseURL, driver);
    }
    AddUser(user) {
        return axios.post(this.UsersURL, user);
    }
    GetUsers() {
        return axios.get(this.UsersURL);
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
