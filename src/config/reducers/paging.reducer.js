import { SET_PAGING } from "../constants/paging.constants";

const reducer = (state = {page: 1, count: 0}, action) => {
    switch (action.type) {
        case SET_PAGING:
            return action.val;
        default:
            return state;
    }
};

export default reducer;
