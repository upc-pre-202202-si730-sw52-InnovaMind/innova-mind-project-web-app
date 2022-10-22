import axios from "axios";
export class DriversServices {
    BaseURL = "http://localhost:3000/drivers";
    NewsURL = "http://localhost:3000/driver-news";
    ContactsURL = "http://localhost:3000/contacts";
    MessagesURL = "http://localhost:3000/messages";
    UsersURL= "http://localhost:3000/users";
    JobsURL = "http://localhost:3000/jobsdrivers";
    GetAll() {
        return axios.get(this.BaseURL);
    }
    AddDriver(driver) {
        return axios.post(`${this.BaseURL}`, driver);
    }
    GetDriverById(id) {
        return axios.get(`${this.BaseURL}/${id}`);
    }

    ModifyDriver(id, driver) {
        return axios.put(`${this.BaseURL}/${id}`, driver);
    }
    AddUser(user) {
        return axios.post(this.UsersURL, user);
    }
    GetUsers() {
        return axios.get(this.UsersURL);
    }
    GetDriversNews() {
        return axios.get(this.NewsURL);
    }
    GetUserByEmail (email) {
        return axios.get(`${this.UsersURL}?email=${email}`);
    }
    Getdriver(id) {
        return axios.get(`${this.BaseURL}/${id}`);
    }
    GetJobsDriver(id) {
        return axios.get(`${this.JobsURL}?idUser=${id}`);
    }
    GetDriversNews() {
        return axios.get(this.NewsURL);
    }

    //////Messages Section /////////

    GetContacts() {
        return axios.get(this.ContactsURL);
    }

    GetMessages() {
        return axios.get(this.MessagesURL);
    }

    SendMessage(answer){
        return axios.post(this.MessagesURL, answer)
    }
}
