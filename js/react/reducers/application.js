import events from 'st/constants/application';

function reducer(state = {
    index: 1
}, action) {
    switch (action.type) {
        case events.CLICK:
            if (state.index === action.index) {
                return Object.assign({}, state, {
                    index: state.index + 1
                });
            }

        default:
            return state;
    }
}

export default reducer;