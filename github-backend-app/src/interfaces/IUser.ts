import { Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    name: string;
    avatar_url: string;
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

export interface saveUserData {
    username: string;
    name: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
    location: string;
    bio: string;
    blog: string;
    mutualFriends: string[];
}

export interface searchUser {
    username?: string;
    location?: string;
}

export interface updateUserDetails {
    location?: string;
    blog?: string;
    bio?: string;
}