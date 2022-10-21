import axios from "axios";
export class CompaniesServices {
    BaseURL = "http://localhost:3000/companies";
    NewsURL = "http://localhost:3000/company-news";

    GetAll() {
        return axios.get(this.BaseURL);
    }
    GetCompanyById(id) {
        return axios.get(`${this.BaseURL}/${id}`);
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
}
