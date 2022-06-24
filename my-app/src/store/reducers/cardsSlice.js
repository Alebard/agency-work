import {cards, CARDS_TYPES} from "../../cards/cards";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cardsList: cards,
    cardSelected: '',
    activeFilter: CARDS_TYPES.SHOW_ALL,
}

export const cardsSlice = createSlice({
    name: 'cards/all',
    initialState,
    reducers: {
        deleteCard(state){
            state.cardsList = state.cardsList.filter((card) => card.name !== state.cardSelected)
        },
        changeCardByDelete(state, action){
            state.cardSelected = action.payload
        },
        changeActiveFilter(state, action){
            state.activeFilter = action.payload
        }
    }
})