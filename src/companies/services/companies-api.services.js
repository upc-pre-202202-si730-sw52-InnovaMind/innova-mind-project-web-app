import axios from "axios";
export class CompaniesServices {
    BaseURL = "https://my-json-server.typicode.com/AbelCierto/innova-mind-json-server/companies";
    NewsURL = "https://my-json-server.typicode.com/AbelCierto/innova-mind-json-server/company-news";

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
}
