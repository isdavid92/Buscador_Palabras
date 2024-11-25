import { ADD_PALABRA, ADD_MATRIZ } from "./actions_types";

const inicialState = {
    palabras: [],
    matriz: []
}

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case ADD_PALABRA:
            return {
                ...state,
                palabras: [...state.palabras, payload]
            }

        case ADD_MATRIZ:
            return {
                ...state,
                matriz: payload
            }

        default:
            return state
    }
}

export default reducer;