import axios from "axios";
export class CompaniesServices {
    BaseURL = "http://localhost:3000/companies";
    NewsURL = "http://localhost:3000/company-news";
    ContactsURL = "http://localhost:3000/contacts";
    //MessagesURL = "http://localhost:3000/messages";
    MessagesURL = "https://localhost:7275/api/v1/2/message/1";

    UsersURL= "http://localhost:3000/users";
    userEmail= "http://localhost:3000/users?email=";
    NotificationsURL = 'https://localhost:7275/api/v1/2/notification/1';
    GetAll() {
        return axios.get(this.BaseURL);
    }
    GetCompanyById(id) {
        return axios.get(`${this.BaseURL}/${id}`);
    }
    AddCompany(company) {
        return axios.post(this.BaseURL, company);
    }
    AddUser(user) {
        return axios.post(this.UsersURL, user);
    }
    GetUsers() {
        return axios.get(this.UsersURL);
    }
    GetUserByEmail (email) {
        return axios.get(this.userEmail+`${email}`);
    }
    ModifyCompany(id, company) {
        return axios.put(`${this.BaseURL}/${id}`, company);
    }
    Delete(id) {
        return axios.delete(`${this.BaseURL}/${id}`);
    }
    GetCompaniesNews() {
        return axios.get(this.NewsURL);
    }
    Getcompanie(id) {
        return axios.get(`${this.BaseURL}/${id}`);
    }

    //////Messages Section /////////

    GetContacts() {
        return axios.get("https://localhost:7275/api/v1/2/message/recruiters");
    }

    GetMessages(id) {
        return axios.get(`https://localhost:7275/api/v1/2/message/${id}`);
    }

    SendMessage(answer) {
        return axios.post(this.MessagesURL, answer);
    }

    //////Notifications Section /////////

    GetNotificationsByUserId(id, UserId) {
        return axios.get(`https://localhost:7275/api/v1/${UserId}/notification/${id}`,{
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
    DeleteNotificationById(id, UserId) {
        return axios.delete(`https://localhost:7275/api/v1/${UserId}/notification/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
    }

}
