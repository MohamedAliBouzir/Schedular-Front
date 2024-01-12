/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

interface IContributionProps {
  date: string;
  count: number;
}

const GitHubContributionsHeatmap = () => {
  const [contributions, setContributions] = useState<IContributionProps[]>([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const username = 'MohamedAliBouzir'; // Replace with your GitHub username
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();

        // Process data to get the list of repositories
        const repositories = data.map((repo: any) => repo.name);

        // Fetch commit data for each repository
        const commitsPromises = repositories.map(async (repo: string) => {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo}/commits`
          );
          const commitsData = await commitsResponse.json();

          // Extract the commit dates
          const commitDates = commitsData.map((commit: any) => ({
            date: new Date(commit.commit.author.date).toISOString().split('T')[0],
          }));

          return commitDates;
        });

        // Wait for all commits requests to complete
        const commitsByRepo = await Promise.all(commitsPromises);

        // Flatten the array of arrays into a single array of commits
        const allCommits = commitsByRepo.flat();

        // Count the number of commits for each date
        const commitCounts = allCommits.reduce((counts: any, commit: any) => {
          const { date } = commit;
          counts[date] = counts[date] ? counts[date] + 1 : 1;
          return counts;
        }, {});

        // Convert the commitCounts object into an array of objects for the heatmap
        const contributionsData = Object.keys(commitCounts).map((date) => ({
          date,
          count: commitCounts[date],
        }));

        setContributions(contributionsData);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 1);

  return (
    <div>
      <h2>GitHub Contributions</h2>
      <ReactCalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={contributions}
        classForValue={(value: any) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        showWeekdayLabels
      />
    </div>
  );
};

export default GitHubContributionsHeatmap;
