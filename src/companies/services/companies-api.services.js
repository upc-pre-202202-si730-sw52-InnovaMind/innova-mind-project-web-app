import axios from "axios";
export class CompaniesServices {
    BaseURL = "http://localhost:3000/companies";
    NewsURL = "http://localhost:3000/company-news";
    UsersURL= "http://localhost:3000/users";

    GetAll() {
        return axios.get(this.BaseURL);
    }
    Add(company) {
        return axios.post(this.BaseURL, company);
    }
    AddUser(user) {
        return axios.post(this.UsersURL, user);
    }
    GetUserByEmail(email) {
        return axios.get(this.UsersURL+`?email=${email}`)
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
}
