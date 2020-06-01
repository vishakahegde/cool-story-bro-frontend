const intialState = {};

export function HomePageDetailsSliceReducer(state = intialState, action) {
  switch (action.type) {
    case "homePageDetails/pageFetched": {
      const newState = { ...state, ...action.payload };
      return newState;
    }
    default: {
      return state;
    }
  }
}
