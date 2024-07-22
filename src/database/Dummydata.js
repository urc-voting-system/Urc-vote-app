import { nominee, sample } from "../assets";

const votingData = {
  events: [
    {
      id: 1,
      name: "Tech Summit",
      status: "Ongoing",
      endDate: "2024-08-10",
      image: sample,
      categories: [
        {
          id: 1,
          name: "Best Innovator",
          description: "Award for the best tech innovator",
          nominees: [
            {
              id: 1,
              name: "Alice Johnson",
              image: nominee,
            },
            {
              id: 2,
              name: "Bob Smith",
              image: nominee,
            },
          ],
        },
        {
          id: 2,
          name: "Best Startup",
          description: "Award for the best tech startup",
          nominees: [
            {
              id: 3,
              name: "Innovate Inc.",
              image: nominee,
            },
            {
              id: 4,
              name: "Tech Pioneers",
              image: nominee,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "GHIE Awards",
      status: "Upcoming",
      endDate: "2024-09-15",
      image: sample,
      categories: [
        {
          id: 3,
          name: "Best Engineer",
          description: "Award for the best engineer",
          nominees: [
            {
              id: 5,
              name: "Charlie Davis",
              image: nominee,
            },
            {
              id: 6,
              name: "Dana Lee",
              image: nominee,
            },
          ],
        },
        {
          id: 4,
          name: "Innovative Project",
          description: "Award for the most innovative engineering project",
          nominees: [
            {
              id: 7,
              name: "Project Alpha",
              image: nominee,
            },
            {
              id: 8,
              name: "Project Beta",
              image: nominee,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Startup Expo",
      status: "Ongoing",
      endDate: "2024-08-20",
      image: sample,
      categories: [
        {
          id: 5,
          name: "Best Pitch",
          description: "Award for the best startup pitch",
          nominees: [
            {
              id: 9,
              name: "Evelyn Carter",
              image: nominee,
            },
            {
              id: 10,
              name: "Frank Harris",
              image: nominee,
            },
          ],
        },
        {
          id: 6,
          name: "Most Promising Startup",
          description: "Award for the most promising startup",
          nominees: [
            {
              id: 11,
              name: "Bright Future Tech",
              image: nominee,
            },
            {
              id: 12,
              name: "NextGen Solutions",
              image: nominee,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Innovators Meet",
      status: "Completed",
      endDate: "2024-07-15",
      image: sample,
      categories: [
        {
          id: 7,
          name: "Young Innovator",
          description: "Award for the best young innovator",
          nominees: [
            {
              id: 13,
              name: "Grace Wilson",
              image: nominee,
            },
            {
              id: 14,
              name: "Henry Green",
              image: nominee,
            },
          ],
        },
        {
          id: 8,
          name: "Tech For Good",
          description: "Award for technology that benefits society",
          nominees: [
            {
              id: 15,
              name: "EcoTech",
              image: nominee,
            },
            {
              id: 16,
              name: "Health Innovators",
              image: nominee,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Creative Minds",
      status: "Upcoming",
      endDate: "2024-10-05",
      image: sample,
      categories: [
        {
          id: 9,
          name: "Best Creative Solution",
          description: "Award for the best creative tech solution",
          nominees: [
            {
              id: 17,
              name: "Isabella King",
              image: nominee,
            },
            {
              id: 18,
              name: "Jack Thompson",
              image: nominee,
            },
          ],
        },
        {
          id: 10,
          name: "Tech Visionary",
          description: "Award for the most visionary tech leader",
          nominees: [
            {
              id: 19,
              name: "Linda Parker",
              image: nominee,
            },
            {
              id: 20,
              name: "Michael Johnson",
              image: nominee,
            },
          ],
        },
      ],
    },
  ],
};

export const Events = votingData.events;
