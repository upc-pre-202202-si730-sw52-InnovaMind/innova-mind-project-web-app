import axios from "axios";
export class CompaniesServices {
    BaseURL = "http://localhost:3000/companies";
    NewsURL = "http://localhost:3000/company-news";
    ContactsURL = "http://localhost:3000/contacts";
    MessagesURL = "http://localhost:3000/messages";

    GetAll() {
        return axios.get(this.BaseURL);
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
}
