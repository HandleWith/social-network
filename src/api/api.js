import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "09081a57-cde2-4c86-bb7f-fee15686b4ad",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 3) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  setFollow(userId) {
    return instance.post(`follow/${userId}`, {}).then((response) => {
      return response.data.resultCode;
    })
  },
  setUnFollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data.resultCode;
    })
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  }
};

export const authApi = {
  me() {
    return instance.get(`auth/me`)
  },
  getAuthUserProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
