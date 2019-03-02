import { SET_SERVICE_TYPE } from '../services/services.constants';

const reducer = (state = '', action) => {
    switch (action.type) {
        case SET_SERVICE_TYPE:
            return action.val;
        default:
            return state;
    }
};

export default reducer;
