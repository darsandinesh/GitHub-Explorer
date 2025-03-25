import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    name: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
    location: string;
    bio: string;
    blog: string;
    mutualFriends: string[];
    isDeleted: boolean;
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
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