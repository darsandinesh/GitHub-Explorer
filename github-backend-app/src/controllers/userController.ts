import { Request, Response } from 'express'
import { deleteUserFromDB, getUserFromDB, listUsersSorted, saveUser, searchUsers, updateUserData } from '../services/userService';
import { findMutualFriends, getGitHubUserData } from '../services/githubService';
import { saveUserData } from '../interfaces/IUser';

export const createUser = async (req: Request, res: Response) => {
    const { username } = req.params;
    console.log(username, 'user');
    try {
        let user = await getUserFromDB(username);
        if (!user) {
            const githubData: saveUserData = await getGitHubUserData(username);
            user = await saveUser(githubData);
        }
        res.status(201).json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server Error' })
    }
}

export const findFriends = async (req: Request, res: Response) => {
    const { username } = req.params;

    try {
        const friends = await findMutualFriends(username);
        res.status(200).json(friends);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server Error' })
    }
}

export const searchUser = async (req: Request, res: Response) => {
    try {
        const result = await searchUsers(req.query);
        if (result) {
            res.status(200).json(result);
            return;
        }
        res.status(200).json({ message: 'No data found ' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server Error' })
    }
}

export const updateUserInfo = async (req: Request, res: Response) => {
    const { username } = req.params
    const data = req.body;
    try {
        if (!username) {
            res.status(400).json({ error: 'username is required' });
            return;
        }
        const result = await updateUserData(username, data);
        if (result) {
            res.status(200).json({ message: 'Data successfully updated' });
            return
        }
        res.status(400).json({ error: 'Something went wrong' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server Error' })
    }
}

export const getUsersSorted = async (req: Request, res: Response) => {
    try {
        const users = await listUsersSorted(req.query.sortBy as string);
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server Error' })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { username } = req.params
    try {
        await deleteUserFromDB(username);
        res.status(200).send({ message: 'User Deleted successful' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server Error' })
    }
}