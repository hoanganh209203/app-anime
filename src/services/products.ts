import axios from 'axios';
import {https} from '../confs/axiosconf'
import productType from '../interface/product';

export const getAllProduct = async()=>{
try {
    const {data} = await https.get('/products');    
    return data;
} catch (error) {
    console.log(error);
    
}
}   
export const getProductByID = async(id:string)=>{
    try {
        const {data} = await https.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        
    }
} 
export const addProduct = async(product:productType)=>{
    try {
        const {data} = await https.post(`/products`,product);
        return data;
    } catch (error) {
        console.log(error);    
    }
}
export const UpdateProduct = async(pid:string,product:productType)=>{
    try {
        const {data} = await https.put(`/products/${pid}`,product);
        return data;
    } catch (error) {
        console.log(error);    
    }
}
export const DeleteProduct = async(pid:string)=>{
    try {
        const {data} = await https.delete(`/products/${pid}`);
        return data;
    } catch (error) {
        console.log(error);    
    }
}

export const productService ={
    getList(limit=30,page=1,search="",category=""){
        return https.get(`/products?_limit=${limit}&_page=${page}&title=${search}&category/${category}`)
    },
    getTop(){
        return https.get(`/products?rating_gte=4.8&rating_lte=4.91`)
    },
    getSearch(search=""){
        return https.get(`/products?title=${search}`)
    },
 
}