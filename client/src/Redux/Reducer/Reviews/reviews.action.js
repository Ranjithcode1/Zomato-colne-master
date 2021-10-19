import axios from "axios";

//Redux Reducer Type
import { GET_REVIEWS, POST_REVIEWS } from "./reviews.type";

export const getReviews = (resid) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `http://localhost:4000/review/${resid}`,
    });

    return dispatch({ type: GET_REVIEWS, payload: reviewList.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const postReviews = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:4000/review/new",
      data: { reviewData },
    });
    return dispatch({ type: POST_REVIEWS, payload: reviewData });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
