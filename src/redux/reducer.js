import { ADD_PALABRA, ADD_MATRIZ, RESET_PALABRA } from "./actions_types";

const inicialState = {
    palabras: [],
    matriz: []
}

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case ADD_PALABRA:
            return {
                ...state,
                palabras: payload
            }

        case RESET_PALABRA:
            return {
                ...state,
                palabras: []
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