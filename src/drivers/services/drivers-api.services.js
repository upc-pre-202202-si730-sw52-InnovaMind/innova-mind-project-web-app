import axios from "axios";
export class DriversServices {
    BaseURL = "http://localhost:3000/drivers";
    NewsURL = "http://localhost:3000/driver-news";
    UsersURL= "http://localhost:3000/users";
    GetAll() {
        return axios.get(this.BaseURL);
    }
    AddDriver(driver) {
        return axios.post(`${this.BaseURL}`, driver);
    }
    AddUser(user) {
        return axios.post(this.UsersURL, user);
    }
    GetUsers() {
        return axios.get(this.UsersURL);
    }
    GetUserByEmail (email) {
        return axios.get(`${this.UsersURL}?email=${email}`);
    }

}
