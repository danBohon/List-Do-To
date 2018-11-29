import axios from "axios";

export const getTasks = function() {
    console.log('------getTasks axios call fired------')
    return axios.get("https://practiceapi.devmountain.com/api/tasks").then((res) => res.data)
}
    
export const createTask = function(title, description) {
    console.log('------createTask axios call fired------')
    return axios.post("https://practiceapi.devmountain.com/api/tasks", {title, description}).then((res) => res.data)
}

export const deleteTask = function(id) {
    console.log('------deleteTask axios call fired------')
    return axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then((res) => {
        console.log('res.data---------->', res.data)
        return res.data
    })
} 

export const completeTask = function (id) {
    return axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then((res) => res.data)
}