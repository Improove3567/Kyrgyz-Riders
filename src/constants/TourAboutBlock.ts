interface TourAboutArrProps {
  title?: string;
  id: number
  text?: textProps[];
}
interface textProps {
  description?: string;
  arrayText?: arrayTextProps[];
}
interface arrayTextProps {
  description?: string;
}
// export const T = {
//   id: 1,
//   title: "Hello",
//   tourInfo: {
//     time: "May",
//     category: "active",
//     duration: {
//       type: "day",
//       time: 7,
//     },
//     itinery: [{ id: 1, label: "Bishkek" }],
//     acc: [{ id: 1, label: "2 nights" }],
//     bring: ["Hat"],
//   },
//   about: "About us",
//   sights: [{}, {}],
//   love: [""],
//   photos: [""],
// };

export const TourAboutArr: TourAboutArrProps[] = [
  {
    title: "Time of year",
    id: 1,
    text: [
      {
        description: "May to october",
      },
    ],
  },
  {
    title: "Tour category",
    id: 2,
    text: [
      {
        description: "Multi-active",
      },
    ],
  },
  {
    title: "Duration",
    id: 3,
    text: [
      {
        description: "7 days",
      },
    ],
  },
  {
    title: "Itinerary",
    id: 4,
    text: [
      {
        arrayText: [
          {
            description: "Bishkek",
          },
          {
            description: "Kyzyl - Oi",
          },
          {
            description: "Song - Kol Lake",
          },

          {
            description: "Bokonbaev",
          },

          {
            description: "Karakol",
          },
          
          {
            description: 'Altyn - Arashan'
          },
          
          {
            description: 'Cong - Kimin'
          },
        ],
      },
    ],
  },
  {
    title: "Accommodation",
    id: 5,
    text: [
      {
        arrayText: [
          {
            description: "2 nights - in yurt",
          },
          {
            description: "3 nights - in guesthouse ",
          },
          {
            description: "1 night - in hotel",
          },
        ],
      },
    ],
  },
  {
    title: "What to bring?",
    id: 6,
    text: [
      {
        arrayText: [
          {
            description: "Weatherproof warm clothes",
          },
          {
            description: "Hat",
          },
          {
            description: "Traking Boots",
          },
          {
            description: "Sunscreen",
          },
          {
            description: "Sunglasses",
          },
        ],
      },
    ],
  },
];
