interface ICreateTour {
  childs: number;
  adults: number;
}

export const initialState: ICreateTour = {
  childs: 0,
  adults: 0,
};

export function Reducer(state: any, action: any) {
  switch (action.type) {
    case "incrementChild":
      return { ...state, childs: state.childs + 1 };
    case "decrementChild":
      if (state.childs != 0) return { ...state, childs: state.childs - 1 };
      else {
        return { ...state };
      }
    case "incrementAdult":
      return { ...state, adults: state.adults + 1 };
    case "decrementAdult":
      if (state.adults != 0) return { ...state, adults: state.adults - 1 };
      else {
        return { ...state };
      }
    default:
      throw new Error();
  }
}
