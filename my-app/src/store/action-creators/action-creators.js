import {cardsSlice} from "../reducers/cardsSlice";

export function selectCard(cardName, cardSelected, className) {
    const {changeCardByDelete} = cardsSlice.actions
    return function (dispatch) {
        if (cardSelected === cardName) {
            dispatch(changeCardByDelete(''))
        } else {
            dispatch(changeCardByDelete(cardName))
        }
    }
}


export function changeActiveFilerAction(filterName) {
    return function (dispatch) {
        const {changeActiveFilter} = cardsSlice.actions
        dispatch(changeActiveFilter(filterName))
    }
}

export function deleteCard() {
    return function (dispatch) {
        const {deleteCard} = cardsSlice.actions
        dispatch(deleteCard())
    }
}

