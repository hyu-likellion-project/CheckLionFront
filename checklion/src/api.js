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

    async getStudents(teamid) {
        const result_ = await axios.get('/student/?teamid='+teamid)
        return result_.data
    },

    async getStatus(studentid,week) {
        const result_ = await axios.get('/check/status/?studentid='+studentid+"&week="+week)
        return result_.data[0]
        
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