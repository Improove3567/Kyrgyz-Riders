interface ICreateTour {
  childs: number;
  adults: number;
  start: string;
  end: string;
  sights: Array<object>;
  ownVersionSights: string;
  activities: Array<object>;
  activitiesDuration: string;
  ownVersionActivities: string;
}

export const initialState: ICreateTour = {
  childs: 0,
  adults: 0,
  start: "",
  end: "",
  sights: [],
  ownVersionSights: "",
  activities: [],
  activitiesDuration: "Not Choosen yet",
  ownVersionActivities: "",
};

export function Reducer(state: any, action: any) {
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
    case "addSight":
      return {
        ...state,
        sights: [
          ...state?.sights,
          { ...action.payload, visit: "Nice to visit" },
        ],
      };
    case "removeSights":
      const filtered = state?.sights.filter(
        (el: any) => el.tid != action.payload
      );
      return { ...state, sights: filtered };
    case "updateSights":
      const { index, updatedData } = action.payload;
      const updatedArr = [...state.sights];
      updatedArr[index] = {
        ...updatedData,
        visit: updatedData.visit ? "Nice to Visit" : "Must visit",
      };
      const seenIds: any = {};
      const uniqueArr = updatedArr.filter((obj) => {
        if (!seenIds[obj.tid]) {
          seenIds[obj.tid] = true;
          return true;
        }
        return false;
      });
      return { ...state, sights: uniqueArr };
    case "addOwnSights":
      const event = action.payload;
      const newValue = event.target.value;
      return {
        ...state,
        ownVersionSights: newValue,
      };
    case "addActivities":
      return {
        ...state,
        activities: [
          ...state?.activities,
          { ...action.payload, visit: "Nice to visit" },
        ],
      };
    case "removeActivities":
      const filteredActivities = state.activities.filter(
        (el: any) => el.tid != action.payload
      );
      return { ...state, activities: filteredActivities };
    case "updateActivities":
      const { i, updatedActivities } = action.payload;
      const activitiesArr = [...state.activities];
      activitiesArr[i] = {
        ...updatedActivities,
        visit: updatedActivities.visit ? "Nice to Visit" : "Must visit",
        duration: state.activitiesDuration,
      };
      const seenId: any = {};
      const uniqActivities = activitiesArr.filter((obj) => {
        if (!seenId[obj.tid]) {
          seenId[obj.tid] = true;
          return true;
        }
        return false;
      });
      return { ...state, activities: uniqActivities };
    case "durationActivities":
      return { ...state, activitiesDuration: action.payload };
    case "addOwnActivities":
      const eventActivities = action.payload;
      const newActivitiesValue = eventActivities.target.value;
      return {
        ...state,
        ownVersionActivities: newActivitiesValue,
      };
    default:
      throw new Error();
  }
}
