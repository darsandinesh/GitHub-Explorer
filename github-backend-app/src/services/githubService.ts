import axios from "axios";
import dotenv from 'dotenv'
import userModel from "../models/userModel";
import { saveUserData } from "../interfaces/IUser";
dotenv.config();

export const getGitHubUserData = async (username: string) => {
    const response = await axios.get(`${process.env.GITHUB_URL}/${username}`);
    console.log(response, 'res for the search')
    const friends = await findMutualFriends(username);

    const userDetails: saveUserData = {
        username: response.data.login,
        name: response.data.name,
        avatar_url: response.data.avatar_url,
        followers: response.data.followers,
        following: response.data.following,
        public_repos: response.data.public_repos,
        public_gists: response.data.public_gists,
        location: response.data.location,
        bio: response.data.bio,
        blog: response.data.blog,
        mutualFriends: friends
    }

    return userDetails
}

export const findMutualFriends = async (username: string) => {

    const friends = await userModel.findOne({ username });

    if (friends?.mutualFriends.length) {
        return friends?.mutualFriends
    }

    const followers = await fetchFollowers(username);
    const following = await fetchFollowing(username);

    const mutualFriends = following.filter(user => followers.includes(user));


    return mutualFriends;
}

// Fetch followers for a user from the GitHub API
async function fetchFollowers(username: string): Promise<string[]> {
    const followersResponse = await axios.get(`${process.env.GITHUB_URL}/${username}/followers`);
    return followersResponse.data.map((follower: any) => follower.login);
}

// Fetch users that the user is following from the GitHub API
async function fetchFollowing(username: string): Promise<string[]> {
    const followingResponse = await axios.get(`${process.env.GITHUB_URL}/${username}/following`);
    console.log(followingResponse, '-res')
    return followingResponse.data.map((following: any) => following.login);
}