import { actions } from "../actions";

// initaial state for profile page data
const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    // data fetching
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.profile.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        posts: action.payload.posts,
      };
    }

    case actions.profile.DATA_FETCHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case actions.profile.USER_DATA_EDITED: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { initialState, profileReducer };
