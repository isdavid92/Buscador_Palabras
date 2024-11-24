import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions_types";

const URL = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.post(URL, character);
            return dispatch({
                        type: ADD_FAV,
                        payload: data
                    })
    
        };
    } catch (error) {
        console.log(error);
    }
}

export const removeFav = (id) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.delete(`${URL}/${id}`);
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            })
        };
    } catch (error) {
        console.log(error);
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}