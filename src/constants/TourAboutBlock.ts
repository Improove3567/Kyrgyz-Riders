interface TourAboutArrProps {
  title?: string;
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
    text: [
      {
        description: "May to october",
      },
    ],
  },
  {
    title: "Tour category",
    text: [
      {
        description: "Multi-active",
      },
    ],
  },
  {
    title: "Duration",
    text: [
      {
        description: "7 days",
      },
    ],
  },
  {
    title: "Itinerary",
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
