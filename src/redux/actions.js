import { ADD_PALABRA, ADD_MATRIZ, RESET_PALABRA } from "./actions_types";

export const addPalabra = (arr) => {
    return {
        type: ADD_PALABRA,
        payload: arr
    }
};

export const resetPalabra = () => {
    return {
        type: RESET_PALABRA
    }
};

export const addMatriz = (matriz) => {
    return {
        type: ADD_MATRIZ,
        payload: matriz
    }
};