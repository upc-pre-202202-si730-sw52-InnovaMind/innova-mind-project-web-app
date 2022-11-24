import axios from "axios";
export class DriversServices {
    UsersURL= "https://localhost:7275/api/v1/users";

    BaseURL = "http://localhost:3000/drivers";
    NewsURL = "https://localhost:7275/api/v1/post";
    ContactsURL = "http://localhost:3000/contacts";
    MessagesURL = "http://localhost:3000/messages";

    JobsURL = "http://localhost:3000/jobsdrivers";
    NotificationsURL = 'http://localhost:3000/notifications-drivers';

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

    Getdriver(id) {
        return axios.get(`${this.BaseURL}/${id}`);
    }
    GetJobsDriver(id) {
        return axios.get(`${this.JobsURL}?idUser=${id}`);
    }


    //////Messages Section /////////
    // ----------------Without url http:port 3000---------------
    GetUserById(id) {
        return axios.get(`${this.UsersURL}/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    GetMessages(id, userid) {
        return axios.get(`https://localhost:7275/api/v1/${userid}/message/${id}`);
    }

    GetContacts(userid) {
        return axios.get(`https://localhost:7275/api/v1/${userid}/message/drivers`);
    }

    SendMessage(answer, id, userid) {
        return axios.post(`https://localhost:7275/api/v1/${userid}/message/${id}`, answer)
    }
    //////Notifications Section /////////

    GetNotifications() {
        return axios.get(this.NotificationsURL);
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
}
