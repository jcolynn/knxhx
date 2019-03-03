import { SET_PAGING } from "../services/services.constants";

const reducer = (state = {page: 1, numResults: 0, count: 0}, action) => {
    switch (action.type) {
        case SET_PAGING:
            return action.val;
        default:
            return state;
    }
};

export default reducer;
