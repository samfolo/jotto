import { actionTypes } from '../actions';

export default (state=false, action) => {
  switch(action.type) {
    case(actionTypes.GUESS_WORD):
      return {

      };
    default : return state;
  };
};
