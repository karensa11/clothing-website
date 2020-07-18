import actionTypes from "./actionTypes";

const INITIAL_STATE = {
    currentUser: null
};

const reducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        case actionTypes.REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUser: null
            };
        default:
            return state;
    }
};

export default reducer;
