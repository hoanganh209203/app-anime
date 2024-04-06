import Joi from 'joi';
export const ProductJoiObj = Joi.object({
    title: Joi.string().required().empty().messages({
        "any.required":"Tên không để trống",
        "string.empty":"Tên không để trống"
    }),
    thumbnail: Joi.string().required().empty().messages({
        "any.required":"Ảnh không để trống",
        "string.empty":"Ảnh không để trống"
    }),
    price: Joi.number().required().min(1000).messages({
        "any.required":"Tên không để trống",
        "number.min":"Giá không nhỏ hơn 1000"
    })
})