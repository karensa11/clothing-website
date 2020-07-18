import actionTypes from "./user-types";

export const setCurrentUser = user => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: user
    }
};

export const removeCurrentUser = () => {
    return {
        type: actionTypes.REMOVE_CURRENT_USER
    }
};
