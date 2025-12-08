import { Users } from "../Models/Employee";
import { AppDataSource } from "../Config/data_source";

const userRepo = AppDataSource.getRepository(Users);

export const findByEmail = async(userEmail: string)=>{
    return userRepo.findOne({where: {userEmail: userEmail}})
}

export const createUser = async(data: Users)=>{
    return userRepo.save(data);
}

export const findById = async(id: number)=>{
    return userRepo.findOne({where: {u_id: id}})
}