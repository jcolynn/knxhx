import { SET_GENDER_FILTERS } from '../services/services.constants';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_GENDER_FILTERS:
            return action.val;
        default:
            return state;
    }
};

export default reducer;
