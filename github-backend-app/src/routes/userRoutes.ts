import express from 'express';
import { createUser, deleteUser, findFriends, getUsersSorted, searchUser, updateUserInfo } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/user/:username', createUser);
userRouter.get('/user/:username/friends', findFriends);
userRouter.get('/search', searchUser);
userRouter.put('/user/:username', updateUserInfo);
userRouter.delete('/user/:username', deleteUser);
userRouter.get('/users', getUsersSorted);

export default userRouter;