import axios from "axios";
axios.defaults.baseURL='http://localhost:5000';
const registerUrl='/user/';
export const  sendData=(name1,name2)=>{
    return axios.post(registerUrl,{
        firstName:name1,
        secondName:name2
    });
}

export const  updateData=(result,userId)=>{
    return axios.put(registerUrl,{
        value:result,
        id:userId
    });
}