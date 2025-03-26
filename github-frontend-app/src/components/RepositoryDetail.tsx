import React from 'react';
import { repo } from '../types/Interface';

interface RepoDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    repo: repo | null;
}

const RepositoryDetail: React.FC<RepoDetailModalProps> = ({ isOpen, onClose, repo }) => {
    if (!isOpen || !repo) return null;

    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-75 flex justify-center items-center">
            {/* Modal content */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{repo.name}</h2>
                <p className="text-gray-700 mb-4">{repo.description || 'No description available'}</p>
                
                <div className="text-gray-600 mb-4">
                    <p><strong>Stars:</strong> {repo.stargazers_count}</p>
                    <p><strong>Forks:</strong> {repo.forks_count}</p>
                    <p><strong>Language:</strong> {repo.language || 'Not specified'}</p>
                </div>
                
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4 block">
                    View on GitHub
                </a>

                <button 
                    onClick={onClose} 
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default RepositoryDetail;
