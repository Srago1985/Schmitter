import { CHANGE_STATS } from '../actions/statsAction';

const initialStatsState = {
  followers: 10,
  following: 100
};

export const statsReducer = (state = initialStatsState, action) => {
  switch (action.type) {
    case CHANGE_STATS: {
      const { statsType, sum } = action.payload;
      const nextValue = state[statsType] + sum;

      return {
        ...state,
        [statsType]: nextValue < 0 ? 0 : nextValue,
      };
    }

    default:
      return state;
  }
};