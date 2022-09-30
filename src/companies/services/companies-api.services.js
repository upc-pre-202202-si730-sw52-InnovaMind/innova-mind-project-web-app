import axios from "axios";
export class CompaniesServices {
    BaseURL = "http://localhost:3000/companies";

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
}
