import { ADD_PALABRA, ADD_MATRIZ } from "./actions_types";

export const addPalabra = (palabra) => {
    return {
        type: ADD_PALABRA,
        payload: palabra
    }
}

export const addMatriz = (matriz) => {
    return {
        type: ADD_MATRIZ,
        payload: matriz
    }
}