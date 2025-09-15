"use client";
import React, { useEffect, useState } from "react";

const GitHubStatsSummary = () => {
  const [stats, setStats] = useState({
    total: 0,
    best: 0,
    average: 0,
    thisWeek: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        query {
          user(login: "ChethaNavid") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      const calendar = result.data.user.contributionsCollection.contributionCalendar;

      const total = calendar.totalContributions;

      // Flatten all days
      const allDays = calendar.weeks.flatMap((week: any) => week.contributionDays);

      // Best day
      const best = Math.max(...allDays.map((d: any) => d.contributionCount));

      // Average per day
      const average = (total / allDays.length).toFixed(2);

      // This week (last week in array)
      const lastWeek = calendar.weeks[calendar.weeks.length - 1];
      const thisWeek = lastWeek.contributionDays.reduce(
        (sum: number, d: any) => sum + d.contributionCount,
        0
      );

      setStats({
        total,
        best,
        average: Number(average),
        thisWeek,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 text-center my-4">
      <div className="border rounded-lg p-4">
        <p className="text-xl font-bold">{stats.total}</p>
        <p className="text-sm text-gray-500">Total</p>
      </div>
      <div className="border rounded-lg p-4">
        <p className="text-xl font-bold">{stats.thisWeek}</p>
        <p className="text-sm text-gray-500">This Week</p>
      </div>
      <div className="border rounded-lg p-4">
        <p className="text-xl font-bold">{stats.best}</p>
        <p className="text-sm text-gray-500">Best Day</p>
      </div>
      <div className="border rounded-lg p-4">
        <p className="text-xl font-bold">{stats.average}</p>
        <p className="text-sm text-gray-500">Average / Day</p>
      </div>
    </div>
  );
};

export default GitHubStatsSummary;
