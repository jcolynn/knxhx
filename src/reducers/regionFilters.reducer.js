import { SET_REGION_FILTERS } from '../services/services.constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_REGION_FILTERS:
            return action.val;
        default:
            return state;
    }
};

export default reducer;
