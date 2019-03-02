import { SET_SERVICE_RESULTS } from '../services/services.constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_SERVICE_RESULTS:
            return action.val;
        default:
            return state;
    }
};

export default reducer;
