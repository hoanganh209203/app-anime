import { axiosservice } from "../confs/axiosconf";

export const getAllCategory = async()=>{
    try {
        const {data} = await axiosservice.get('/category');
        console.log(data);
        
        return data;
    } catch (error) {
        console.log(error);
        
    }
    }