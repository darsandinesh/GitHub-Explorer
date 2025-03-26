import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interfaces/IUser";
import { repo } from "../interfaces/IUser";


const repoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: null },
    html_url: { type: String, required: true },
    stargazers_count: { type: Number, default: 0 },
    forks_count: { type: Number, default: 0 },
    language: { type: String, default: null }
});

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
    Repo: [repoSchema],
    
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);