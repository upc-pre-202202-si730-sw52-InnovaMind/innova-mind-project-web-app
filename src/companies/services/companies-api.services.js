import axios from "axios";
export class CompaniesServices {
    BaseURL = "http://20.83.177.159:3000/companies";
    NewsURL = "http://20.83.177.159:3000/company-news";
    ContactsURL = "http://20.83.177.159:3000/contacts";
    MessagesURL = "http://20.83.177.159:3000/messages";
    UsersURL= "http://20.83.177.159:3000/users";
    userEmail= "http://20.83.177.159:3000/users?email=";
    NotificationsURL = 'http://20.83.177.159:3000/notifications-companies';
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
        return axios.get(this.ContactsURL);
    }

    GetMessages() {
        return axios.get(this.MessagesURL);
    }

    SendMessage(answer) {
        return axios.post(this.MessagesURL, answer);
    }

    //////Notifications Section /////////

    GetNotifications() {
        return axios.get(this.NotificationsURL);
    }
}
