import { RepositoryListProps } from "../types/Interface";

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories, onRepoClick }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-6">Repositories</h2>

            {/* Use flexbox to create a two-column layout */}
            <ul className="flex flex-wrap -mx-4">
                {repositories.map((repo) => (
                    <li
                        key={repo.name}
                        className="w-full sm:w-1/2 px-4 mb-6"
                        onClick={() => onRepoClick(repo.name)}
                    >
                        <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200 cursor-pointer">
                            {/* Display repository name */}
                            <div className="text-blue-600 font-semibold text-lg mb-2">
                                {repo.name}
                            </div>

                            {/* Display additional metadata */}
                            <div className="text-sm text-gray-700">
                                <p><span className="font-medium">Stars:</span> {repo.stargazers_count || 0}</p>
                                <p><span className="font-medium">Forks:</span> {repo.forks_count || 0}</p>
                                <p><span className="font-medium">Language:</span> {repo.language || "Not specified"}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepositoryList;
