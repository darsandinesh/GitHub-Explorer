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
    Repo: repo[]
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

export interface repo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language?: string;
};