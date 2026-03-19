import { CHANGE_AVATAR, CHANGE_NAME } from '../actions/userAction';


const initialUserState = {
  avatar: 'https://gravatar.com/avatar/000?d=monsterid',
  name: 'Monster'
};



export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case CHANGE_AVATAR:
      return {
        ...state,
        avatar: action.payload || state.avatar,
      };

    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload || state.name,
      };

    default:
      return state;
  }
};


