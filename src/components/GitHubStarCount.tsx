import React, { useEffect, useState } from 'react';
import { GitHubStarCountProps } from '../types/GitHubStarCountProps';

const GitHubStarCount: React.FC<GitHubStarCountProps> = ({ githubStar }) => {
    const [stars, setStars] = useState<number>(0);

    useEffect(() => {
        const fetchGitHubStars = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${githubStar}`);
                const data = await response.json();
                setStars(data.stargazers_count);
            } catch (error) {
                console.error("Yulduzlar sonini olishda xatolik:", error);
            }
        };

        if (githubStar) fetchGitHubStars();
    }, [githubStar]);

    return (
        <span>{stars}</span>
    );
};

export default GitHubStarCount;
