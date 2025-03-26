import React from 'react';

interface FollowersModalProps {
    isOpen: boolean;
    onClose: () => void;
    followers: String[];
}

const FollowersList: React.FC<FollowersModalProps> = ({ isOpen, onClose, followers }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-3/4 relative z-10 overflow-y-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Followers</h2>

                <ul className="space-y-3 max-h-80 overflow-y-auto">
                    {followers.map((follower, index) => (
                        <li
                            key={index}
                            className="p-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition duration-200"

                        >
                           <p
                                onClick={() => window.location.href = `${import.meta.env.VITE_GITHUB_URL}/${follower}`}
                                className="cursor-pointer text-blue-600 hover:underline"
                            >
                                {follower}
                            </p>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={onClose}
                    className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200 w-1/2 "
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default FollowersList;
