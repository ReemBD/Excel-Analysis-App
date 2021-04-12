
export function excelReducer(state, action) {

    switch (action.type) {
        case 'SET_EXCELS':
            return { ...state, excels: action.excels }
        case 'ADD_EXCEL':
            return { ...state, excels: [...state.excels, action.excel] }
        default:
            return state
    };
}