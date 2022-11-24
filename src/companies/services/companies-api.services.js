import axios from "axios";
export class CompaniesServices {
    UsersURL= "https://localhost:7275/api/v1/users";
    BaseURL = "http://localhost:3000/";
    NewsURL = "http://localhost:3000/company-news";
    ContactsURL = "http://localhost:3000/contacts";
    //MessagesURL = "http://localhost:3000/messages";
    MessagesURL = "https://localhost:7275/api/v1/2/message/1";

    userEmail= "http://localhost:3000/users?email=";
    NotificationsURL = 'http://localhost:3000/notifications-companies';

    GetAllUsers(){
        return axios.get(this.UsersURL,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    GetUserById(id) {
        return axios.get(`${this.UsersURL}/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
    ModifyCompany(id, company) {
        return axios.put(`${this.BaseURL}/${id}`, company, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

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

    GetContacts(userid) {
        return axios.get(`https://localhost:7275/api/v1/${userid}/message/recruiters`);
    }

    GetMessages(userid, id) {
        return axios.get(`https://localhost:7275/api/v1/${userid}/message/${id}`);
    }

    SendMessage(answer) {
        return axios.post(this.MessagesURL, answer);
    }

    //////Notifications Section /////////

    GetNotifications() {
        return axios.get(this.NotificationsURL);
    }
}
