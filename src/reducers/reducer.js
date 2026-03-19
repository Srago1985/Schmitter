import { CHANGE_AVATAR, CHANGE_NAME } from '../actions/userAction';
import { CHANGE_STATS } from '../actions/statsAction';

export const schmitterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {
                ...state, user: { ...state.user, avatar: action.payload || state.user.avatar }
            };
        case CHANGE_NAME:
            return {
                ...state, user: { ...state.user, name: action.payload || state.user.name }
            };
        case CHANGE_STATS: {
            const res = state.stats[action.payload.statsType] + action.payload.sum;
            const stats = { ...state.stats, [action.payload.statsType]: res < 0 ? 0 : res };
        
            return {
                ...state, stats
            };
        }
        default:
            return state;
    }
};