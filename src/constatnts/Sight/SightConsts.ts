import { ISights } from "../../components/Sights/Sights";
import second from "../../assets/imgg.jpg";

export const sightCards: ISights[] = [
  {
    id: 1,
    img: second.src,
    isEdgeLeft: true,
    title: "San Tash",
    tours: 4,
  },
  {
    id: 2,
    img: second.src,
    title: "Talas",
    tours: 21,
  },
  {
    id: 3,
    img: second.src,
    title: "Bishkek",
    tours: 4,
  },
  {
    id: 4,
    img: second.src,
    title: "Karakol",
    tours: 34,
    isEdgeRight: true,
  },
];
