import { GET_REVIEWS, POST_REVIEWS } from "./reviews.type";

const initialState = {
  reviews: [],
};

const reviewReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case POST_REVIEWS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;
