import axios from "axios";
export class DriversServices {
    UsersURL= "https://localhost:7275/api/v1/users"
    NewsURL = "https://localhost:7275/api/v1/post"

    GetAll() {
        return axios.get(this.UsersURL);
    }
    AddDriver(driver) {
        return axios.post(`${this.BaseURL}`, driver);
    }
    GetDriverById(id) {
        return axios.get(`${this.UsersURL}/${id}`);
    }

    ModifyDriver(id, driver) {
        return axios.put(`${this.UsersURL}/${id}`, driver, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    Getdriver(id) {
        return axios.get(`${this.UsersURL}/${id}`);
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
