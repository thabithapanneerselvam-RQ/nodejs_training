import { Users } from "../Models/Employee";
import { findByEmail, createUser } from "../Repositories/authRepository";
import bcrypt from "bcryptjs";
import { AppError } from "../Utils/appError";

export const signupService = async(data: Users)=>{
    const existingUser = await findByEmail(data.userEmail);
    if(existingUser) {
        throw new AppError("user already exist", 400)
    }
    const hashed = await bcrypt.hash(data.userPassword,10)

    const newUser= {
        userName: data.userName,
        userEmail: data.userEmail,
        userPassword: hashed,
        userPhone: data.userPhone
    };
    console.log("new user:", newUser)
    return await createUser(newUser as Users)

}