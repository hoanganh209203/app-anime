import Joi from "joi"
import { FormProduct } from "../interface/formProduct";

const ProductSchema = Joi.object<FormProduct>({
    title:Joi.string().required().min(3).messages({
        "string.empty": "Please fill in the title field."
    }),
    description:Joi.string().required().messages({
        "string.empty": "Please fill in the title field."
    }),
    price:Joi.number().required().messages({
        "number.base": "Please fill in the title field."
    }),
    discountPercentage:Joi.number().required().messages({
        "number.base": "Please fill in the title field."
    }),
    rating:Joi.number().required().min(1).max(5).messages({
        "number.base": "Please fill in the title field." 
    }),
    stock:Joi.number().required().messages({
        "number.base": "Please fill in the title field." 
    }),
    brand:Joi.string().required().messages({
        "string.empty": "Please fill in the title field."
    }),
    category:Joi.string().required().optional(),
    thumbnail:Joi.string().required().messages({
        "string.empty": "Please fill in the title field."
    }),
    images:Joi.array().required()

}).options({abortEarly:false})

const productValidate = (data:FormProduct)=>{
    const {value,error} = ProductSchema.validate(data)
    console.log(error?.details);
    
    let errorMessage:{ [key: string | number]:any } = {}
    if(error){
        error.details.forEach(detail =>{
            errorMessage[detail.path[0]] = detail.message
        });
    }
    if(Object.keys(errorMessage).length > 0){
        return {value,errorMessage}
    }
    return {value,errorMessage:null}
    
}

export default productValidate