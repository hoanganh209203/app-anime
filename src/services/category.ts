import { https } from "../confs/axiosconf";

export const getAllCategory = async()=>{
    try {
        const {data} = await https.get('/category');
        console.log(data);
        
        return data;
    } catch (error) {
        console.log(error);
        
    }
    }