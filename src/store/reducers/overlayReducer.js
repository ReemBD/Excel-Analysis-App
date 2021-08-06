export function overlayReducer(state, action) {

    switch (action.type) {
        case 'TOGGLE_OVERLAY':
            return { ...state, isOpen: !state.isOpen }
        case 'OPEN_OVERLAY':
            return { ...state, isOpen: true }
        case 'CLOSE_OVERLAY':
            return { ...state, isOpen: false }
        default:
            return state
    }
}