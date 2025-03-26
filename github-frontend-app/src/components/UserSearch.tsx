import { useState } from "react";

interface UserSearchProps {
    onSearch: (username: string) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handelSearch = () => {
        if (username.trim()) {
            onSearch(username.trim());
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                className="border rounded p-2"
            />
            <button className="bg-blue-400 text-white p-3 rounded" onClick={handelSearch}>
                Search
            </button>
        </div>
    )
}

export default UserSearch;