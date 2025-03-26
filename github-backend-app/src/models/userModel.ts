import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    avatar_url: {
        type: String
    },
    followers: {
        type: Number
    },
    following: {
        type: Number
    },
    public_repos: {
        type: Number,
    },
    public_gists: {
        type: Number
    },
    location: {
        type: String
    },
    bio: {
        type: String
    },
    blog: {
        type: String
    },
    mutualFriends: {
        type: [String]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);