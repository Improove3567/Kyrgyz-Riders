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
  discribeTrip: string;
  watchShows: Array<object>;
  ownWatchShows: string;
  tripDates: object;
  anythingAdd: string;
  name: string;
  lastName: string;
  email: string;
  number: string;
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
  discribeTrip: "Fast-paced: See as much as possible within your trip duration",
  watchShows: [],
  tripDates: {
    start: "",
    end: "",
    title: "",
  },
  ownWatchShows: "",
  anythingAdd: "",
  name: "",
  lastName: "",
  email: "",
  number: "",
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
    case "discribeTrip":
      return { ...state, discribeTrip: action.payload };
    case "addWatchShows":
      return {
        ...state,
        watchShows: [
          ...state?.watchShows,
          { ...action.payload, visit: "Nice to visit" },
        ],
      };
    case "removeWatchShows":
      const filteredArr = state?.watchShows.filter(
        (el: any) => el.tid != action.payload
      );
      return { ...state, watchShows: filteredArr };
    case "updateWatchShows":
      const { indx, data } = action.payload;
      const updatedArrWatch = [...state.watchShows];
      updatedArrWatch[indx] = {
        ...data,
        visit: data.visit ? "Nice to Visit" : "Must visit",
      };
      const seen: any = {};
      const uniqueArrWatch = updatedArrWatch.filter((obj) => {
        if (!seen[obj.tid]) {
          seen[obj.tid] = true;
          return true;
        }
        return false;
      });
      return { ...state, watchShows: uniqueArrWatch };
    case "tripDatesStart":
      return {
        ...state,
        tripDates: {
          ...state.tripDates,
          start: action.payload?.date.toString(),
          title: action.payload?.title,
        },
      };
    case "tripDatesEnd":
      return {
        ...state,
        tripDates: {
          ...state.tripDates,
          end: action.payload?.date.toString(),
          title: action.payload?.title,
        },
      };
    case "ownWatchShows":
      const eventWatch = action.payload;
      const newWatchValue = eventWatch.target.value;
      return {
        ...state,
        ownWatchShows: newWatchValue,
      };
    case "anythinAdd":
      const eve = action.payload;
      const anythinRes = eve.target.value;
      return {
        ...state,
        anythingAdd: anythinRes,
      };
    case "addName":
      const eName = action.payload;
      const nameRes = eName.target.value;
      return {
        ...state,
        name: nameRes,
      };
    case "addLastName":
      const eLastName = action.payload;
      const lastNameRes = eLastName.target.value;
      return {
        ...state,
        lastName: lastNameRes,
      };
    case "addEmail":
      const eEmail = action.payload;
      const emailRes = eEmail.target.value;
      return {
        ...state,
        email: emailRes,
      };
    case "addNumber":
      const eNumber = action.payload;
      const NumberRes = eNumber.target.value;
      return {
        ...state,
        number: NumberRes,
      };
    default:
      throw new Error();
  }
}
