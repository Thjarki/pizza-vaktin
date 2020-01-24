export const addToppings = (topping) => {
    return {
        type: 'ADDTOPPING',
        payload: topping
    }
}
export const deleteToppings = (topping) => {
    return {
        type: 'DELETETOPPING',
        payload: topping
    }
}