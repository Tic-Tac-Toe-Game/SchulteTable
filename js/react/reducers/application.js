import events from 'st/constants/application';
import { generate } from 'st/utils/application';

function reducer(state = {
    size: 5
}, action) {
    switch (action.type) {
        case events.CLICK:
            if (state.index < state.size * state.size) {
                if (state.index === action.index) {
                    return Object.assign({}, state, {
                        index: state.index + 1
                    });
                }

                return state;
            }

        default:
            return Object.assign({}, state, {
                index: 1,
                sequence: generate(state.size)
            });
    }
}

export default reducer;