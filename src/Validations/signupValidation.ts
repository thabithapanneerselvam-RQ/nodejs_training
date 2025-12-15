import * as Yup from "yup"

export const signupSchema = Yup.object().shape({
    userName: Yup.string().required(),
    userEmail: Yup.string().email('invalid email address').required('email is required'),
    userPassword: Yup.string().min(6, 'password must be atleast 6 characters').required(),
    userPhone: Yup.string().length(10).required()
})
