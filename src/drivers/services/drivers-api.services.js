import axios from "axios";



export class DriversServices {
    UsersURL= "https://localhost:7275/api/v1/users"
    NewsURL = "https://localhost:7275/api/v1/post"


    getAllUsers() {
        return axios.get('https://localhost:7275/api/v1/users');
    }

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

    GetNotificationsByUserId(UserId) {
        return axios.get(`https://localhost:7275/api/v1/${UserId}/notification`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
    SendNotification(answer) {
        return axios.post(this.NotificationsURL, answer, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
    DeleteNotificationById(UserId, id) {
        return axios.delete(`https://localhost:7275/api/v1/${UserId}/notification/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
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
