import { nominee, sample } from "../assets";

const votingData = {
  events: [
    {
      id: 1,
      name: " Ghie Awards",
      status: "Ongoing",
      endDate: "2024-08-20",
      image: sample,
      categories: [
        {
          id: 1,
          name: " President",
          description: "Presidential Candidates",
          nominees: [
            {
              id: 1,
              name: " Scott",
              image: nominee,
            },
            {
              id: 2,
              name: "Joel",
              image: nominee,
            },
          ],
        },
        {
          id: 2,
          name: "Vice Prosident",
          description: " Vice Presidential Candidates",
          nominees: [
            {
              id: 3,
              name: " David",
              image: nominee,
            },
            {
              id: 4,
              name: "Michael",
              image: nominee,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "URC Executive elections",
      status: "Ongoing",
      endDate: "2024-08-20",
      image: sample,
      categories: [
        {
          id: 1,
          name: " President",
          description: "Presidential Candidates",
          nominees: [
            {
              id: 1,
              name: " Scott",
              image: nominee,
            },
            {
              id: 2,
              name: "Joel",
              image: nominee,
            },
          ],
        },
        {
          id: 2,
          name: "Vice Prosident",
          description: " Vice Presidential Candidates",
          nominees: [
            {
              id: 3,
              name: " David",
              image: nominee,
            },
            {
              id: 4,
              name: "Michael",
              image: nominee,
            },
          ],
        },
      ],
    },
  ],
};

export const Events = votingData.events;
