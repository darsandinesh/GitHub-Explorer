import { saveUserData, searchUser, updateUserDetails } from "../interfaces/IUser";
import userModel from "../models/userModel";

export const saveUser = async (userData: saveUserData) => {
    try {
        const newUser = new userModel(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getUserFromDB = async (username: String) => {
    try {
        return await userModel.findOne({ username, isDeleted: false });
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateUserData = async (username: string, updateData: updateUserDetails) => {
    try {
        return await userModel.findOneAndUpdate({ username }, updateData, { new: true });
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const deleteUserFromDB = async (username: String) => {
    try {
        return await userModel.findOneAndUpdate({ username }, { isDeleted: true });
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const searchUsers = async (query: searchUser) => {
    const searchCriteria: any = {};
    try {
        if (query.username) {
            searchCriteria.username = { $regex: query.username, $options: 'i' };
        }
        if (query.location) {
            searchCriteria.location = { $regex: query.location, $options: 'i' };
        }

        return await userModel.find(searchCriteria);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const listUsersSorted = async (sortField: string) => {
    try {
        return await userModel.find({ isDeleted: { $ne: true } }).sort({ [sortField]: -1 });
    } catch (error) {
        console.log(error);
        return null;
    }
}