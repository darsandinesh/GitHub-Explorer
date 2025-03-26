import { useState } from "react";
import UserSearch from "../components/UserSearch";
import RepositoryList from "../components/RepositoryList";
import { getGitHubData } from "../service/userService";
import { repo } from "../types/Interface";
import RepositoryDetail from "../components/RepositoryDetail";
import FollowersList from "../components/FollowersList";

const HomePage: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<string>("");
    const [repositories, setRepositories] = useState<repo[]>([]);
    const [followers, setFollowers] = useState<string[]>([]);

    const [selectedRepo, setSelectedRepo] = useState<repo | null>(null);
    const [isRepoModalOpen, setIsRepoModalOpen] = useState(false);
    const [isFollowersModalOpen, setIsFollowersModalOpen] = useState(false);

    const handleSearch = async (username: string) => {
        try {
            setUsername(username);
            const data = await getGitHubData(username);
            if (data?.data) {
                setUserInfo(data.data.username || "");
                setRepositories(data.data.Repo || []);
                setFollowers(data.data.mutualFriends || [])
            } else {
                console.error("Invalid data structure:", data);
            }
        } catch (error) {
            console.error("Error fetching GitHub data:", error);
        }
    };

    const handleRepoClick = (rep: string) => {
        console.log(rep)
        const selectedRepo = repositories?.find((data) => data.name === rep);
        if (selectedRepo) {
            setSelectedRepo(selectedRepo);
            setIsRepoModalOpen(true);
        } else {
            console.error(`Repository with name "${rep}" not found.`);
        }
    };

    const handleFollowersClick = async () => {
        try {
            setIsFollowersModalOpen(true);
        } catch (error) {
            console.error("Error fetching followers:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            {/* Search Component */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-center mb-4">GitHub Explorer</h1>
                <UserSearch onSearch={handleSearch} />
            </div>

            {/* User Information and Repositories */}
            {userInfo && repositories && (
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Repositories of {userInfo}</h2>
                        <button
                            onClick={handleFollowersClick}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
                        >
                            View Followers
                        </button>
                    </div>

                    {/* Repository List Component */}
                    <RepositoryList repositories={repositories} onRepoClick={handleRepoClick} />
                </div>
            )}

            {/* Repository Detail Modal */}
            <RepositoryDetail
                isOpen={isRepoModalOpen}
                onClose={() => setIsRepoModalOpen(false)}
                repo={selectedRepo}
            />

            {/* Followers List Modal */}
            <FollowersList
                isOpen={isFollowersModalOpen}
                onClose={() => setIsFollowersModalOpen(false)}
                followers={followers}
            />
        </div>
    );
};

export default HomePage;
