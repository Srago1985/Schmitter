import { schmitterReducer } from "../reducers/reducer";
import { createStore } from "redux";

const initialState = {
    user: {
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 10,
        following: 100        
    }
};

export const store = createStore(schmitterReducer, initialState);