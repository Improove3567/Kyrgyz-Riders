import { ISights } from "../../components/Sights/Sights";
import first from "../../../public/assets/images/first.svg";

export const sightCards: ISights[] = [
  {
    id: 1,
    img: first,
    isEdgeLeft: true,
    title: "San Tash",
    tours: 4,
  },
  {
    id: 2,
    img: first,
    title: "Talas",
    tours: 21,
  },
  {
    id: 3,
    img: first,
    title: "Bishkek",
    tours: 4,
  },
  {
    id: 4,
    img: first,
    title: "Karakol",
    tours: 34,
    isEdgeRight: true,
  },
];
