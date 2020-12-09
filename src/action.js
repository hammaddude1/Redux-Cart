export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const CLEAR = "CLEAR"
export const REMOVE = "REMOVE"
export const TOTAL = "TOTAL"


export const removeItem = (id) => {
    return {
        type: REMOVE,
        payload: { id }
    }
}

export const increaseItem = (id) => {
    return ({
        type: INCREASE,
        payload: { id }
    })
}

export const decreaseItem = (id) => {
    return ({
        type: DECREASE,
        payload: { id }
    })
}

export const getTotal = () => {
    return ({
        type: TOTAL,

    })
}