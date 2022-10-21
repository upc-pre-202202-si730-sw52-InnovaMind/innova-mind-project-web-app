import axios from "axios";
export class CompaniesServices {
    BaseURL = "http://localhost:3000/companies";
    NewsURL = "http://localhost:3000/company-news";
    UsersURL = "http://localhost:3000/users";
    userEmail = "http://localhost:3000/users?email=";
    ContactsURL = "http://localhost:3000/contacts";
    MessagesURL = "http://localhost:3000/messages";

    GetAll() {
        return axios.get(this.BaseURL);
    }

    GetCompanyById(id) {
        return axios.get(`${this.BaseURL}/${id}`);
    }

    AddCompany(company) {
        return axios.post(this.BaseURL, company);
    }

    Add(company) {
        return axios.post(this.BaseURL, company);
    }

    Modify(id, company) {
        return axios.put(`${this.BaseURL}/${id}`, company);
    }

    Delete(id) {
        return axios.delete(`${this.BaseURL}/${id}`);
    }

    GetCompaniesNews() {
        return axios.get(this.NewsURL);
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
}
