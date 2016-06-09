import events from 'st/constants/application';
import { generate } from 'st/utils/application';

function reducer(state = {
    index: 1,
    size: 5
}, action) {
    switch (action.type) {
        case events.CLICK:
            if (state.index === action.index) {
                return Object.assign({}, state, {
                    index: state.index + 1
                });
            }

            return state;
        default:
            return Object.assign({}, state, {
                sequence: generate(state.size)
            });
    }
}

export default reducer;