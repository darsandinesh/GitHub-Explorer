import axios from 'axios';

export const getGitHubData = async (username: string) => {
    try {
        const userData = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/${username}`);

        return userData

    } catch (error) {
        alert('Check the username')
        console.error("Error fetching data", error);
    }
}