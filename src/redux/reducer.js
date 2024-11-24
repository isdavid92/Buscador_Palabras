import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions_types";

const inicialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            }

        case FILTER:
            if ( payload==="todos" ) {
                return {
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: [...state.allCharacters]
                }
            } else {
                return {
                    ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: state.allCharacters.filter(per => per.gender === payload)
                }
            }

        case ORDER:
            return {
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: state.myFavorites.sort((a, b) => payload === 'A' ? a.id - b.id : b.id - a.id)
            }

        default:
            return state
    }
}

export default reducer;