import {https } from "../confs/axiosconf";
import { User } from "../interface/auth";

export const onRegister = async(user:User)=>{
    try {
        const {data} = await https.post(`/user/signup`,user);
        return data;
    } catch (error) {
        console.log(error);    
    }
}

export const UserLogin = async(user:User)=>{
    try {
        const {data} = await https.post(`/user/signin`,user);
        return data;
    } catch (error) {
        console.log(error);    
    }
}