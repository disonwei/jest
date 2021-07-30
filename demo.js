export const runCallback=(callback)=>{
    callback();
}


export const createObject=(classItem)=>{
    new classItem()
}

import axios from "axios"
export const getData=()=>{
    return axios.get("/api").then(res=>res.data)
}