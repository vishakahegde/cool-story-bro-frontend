const intialState = {
  id: null,
  title: null,
  description: null,
  backgroundColor: null,
  color: null,
  createdAt: null,
  updatedAt: null,
  userId: null,
  stories: null,
};

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
