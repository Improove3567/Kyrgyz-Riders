interface ICreateTour {
  childs: number;
  adults: number;
  start: string;
  end: string;
}

export const initialState: ICreateTour = {
  childs: 0,
  adults: 0,
  start: "",
  end: "",
};

export function Reducer(state: any, action: any) {
  console.log(state);

  switch (action.type) {
    case "incrementChild":
      return { ...state, childs: state.childs + action.payload };
    case "decrementChild":
      if (state.childs >= 1)
        return { ...state, childs: state.childs - action.payload };
    case "incrementAdult":
      return { ...state, adults: state.adults + action.payload };
    case "decrementAdult":
      if (state.adults >= 1)
        return { ...state, adults: state.adults - action.payload };
    case "addEnd":
      return { ...state, end: (state.end = action.payload) };
    case "addStart":
      return { ...state, start: (state.start = action.payload) };
    default:
      throw new Error();
  }
}
