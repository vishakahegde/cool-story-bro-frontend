const initialState = [];

export default function HomePageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "homePage/homePagesFetched": {
      const newState = [...state, ...action.payload];
      console.log("State:", newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
