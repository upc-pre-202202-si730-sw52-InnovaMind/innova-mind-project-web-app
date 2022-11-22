import axios from "axios";
export class CompaniesServices {
    BaseURL = "https://localhost:7275/user";
    RecruiterURL = "https://localhost:7275/recruiter";
    NewsURL = "https://localhost:7275/company-news";
    ContactsURL = "https://localhost:7275/contacts";
    MessagesURL = "https://localhost:7275/messages";
    userEmail= "https://localhost:7275/users?email=";
    NotificationsURL = 'https://localhost:7275/notifications-companies';
    getAllRecruiters() {
        return axios.get(this.RecruiterURL);
    }
    getRecruiterById(id) {
        return axios.get(`${this.RecruiterURL}/${id}`);
    }
    async addRecruiter(recruiter) {
        await axios.post(this.BaseURL, recruiter);
        return await axios.post(this.RecruiterURL, recruiter.id);
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
    updateRecruiter(id, recruiter) {
        return axios.put(`${this.BaseURL}/${id}`, recruiter);
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

    GetNotifications() {
        return axios.get(this.NotificationsURL);
    }
}
