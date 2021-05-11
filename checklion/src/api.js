import axios from "axios"


axios.defaults.baseURL = "http://3.36.111.140"

export default {

    getAllTeams() {
        return axios.get('/team/')
    },

    getWeek(weeknum) {
        return axios.get('/check/week/'+weeknum+"/")
    },

    getTeam(teamid) {
        return axios.get('/team/'+teamid+"/")
    },

    getStudents(teamid) {
        return axios.get('/student/?teamid='+teamid)
    },

    getStatus(studentid,week) {
        return axios.get('/check/status/?studentid='+studentid+"&week="+week)
    },

    login(data) {
        return axios.post('/rest-auth/login/', data)
        .catch(error => {
        alert("로그인에 실패했습니다.");
    });
    },

    

    createPost(data) {
        return axios.post('/posts/', data)
    },

    deletePost(id) {
        return axios.delete('/posts/'+String(id))
    }
}