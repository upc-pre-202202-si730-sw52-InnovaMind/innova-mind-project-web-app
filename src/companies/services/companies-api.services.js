import axios from "axios";
export class CompaniesServices {
    UsersURL= "https://innovamind.herokuapp.com/api/v1/users";
    MessagesURL = "https://innovamind.herokuapp.com/api/v1/2/message/1";

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
        return axios.put(`${this.UsersURL}/${id}`, company, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    NotificationsURL = 'https://innovamind.herokuapp.com/api/v1/2/notification/1';
    GetAll() {
        return axios.get(this.UsersURL);
    }
    GetCompanyById(id) {
        return axios.get(`${this.UsersURL}/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
    AddCompany(company) {
        return axios.post(this.UsersURL, company);
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
        return axios.delete(`${this.UsersURL}/${id}`);
    }
    GetCompaniesNews() {
        return axios.get(this.NewsURL);
    }
    Getcompanie(id) {
        return axios.get(`${this.UsersURL}/${id}`);
    }

    //////Messages Section /////////

    GetContacts(userid) {
        return axios.get(`https://innovamind.herokuapp.com/api/v1/${userid}/message/recruiters`);
    }

    GetMessages(userid, id) {
        return axios.get(`https://innovamind.herokuapp.com/api/v1/${userid}/message/${id}`);
    }

    SendMessage(answer) {
        return axios.post(this.MessagesURL, answer);
    }

    //////Notifications Section /////////

    GetNotificationsByUserId(UserId) {
        return axios.get(`https://innovamind.herokuapp.com/api/v1/${UserId}/notification`,{
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
    DeleteNotificationById(UserId,id) {
        return axios.delete(`https://innovamind.herokuapp.com/api/v1/${UserId}/notification/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
    }

}
