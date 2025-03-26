export interface RepositoryListProps {
    repositories: Array<repo>;
    onRepoClick: (repoName: string) => void;
    username?: string;
}

export interface FollowersListProps {
    followers: Array<{ login: string; avatar_url: string }>;
}

export interface RepositoryDetailProps {
    repo: {
        name: string;
        description: string;
        html_url: string;
        stargazers_count: number;
        forks_count: number;
    };
}

export interface repo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language?: string;
};