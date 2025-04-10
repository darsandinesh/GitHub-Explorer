# GitHub API User Management Project

This project is a full-stack application that interacts with the GitHub API to manage user data. The backend fetches and stores user data from GitHub, while the frontend provides a user-friendly interface for searching and displaying repository and follower information.

## Features

### Backend
1. **Save GitHub User Data**:
   - Accept a GitHub username, fetch user details from GitHub, and save them in the database.
   - Prevent duplicate API calls if the user data is already stored.

2. **Mutual Followers (Friends)**:
   - Identify users who mutually follow each other and store them as "friends."

3. **Search**:
   - Search stored user data by username, location, etc.

4. **Soft Delete**:
   - Soft delete user data based on the provided username.

5. **Update User Info**:
   - Update fields like `location`, `blog`, and `bio` for a specific user.

6. **Sort Users**:
   - Retrieve and sort users by fields like `public_repos`, `followers`, and `created_at`.

### Frontend
1. **Search GitHub User**: 
   - Input a GitHub username and fetch a list of repositories.
   
2. **Display Repositories**:
   - Show a list of repositories for the entered user with details like name, stars, and description.
   
3. **Repository Details**:
   - Click on a repository to view more details about it.

4. **Followers Page**:
   - Display the followers of a user and navigate to the gitHub account for each follower.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React (with Hooks)
- **Database**: MongoDB
- **API**: GitHub API

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/darsandinesh/GitHub-Explorer
