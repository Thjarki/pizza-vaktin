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

export const addLocation = (location) => {
    return {
        type: 'ADDLOCATION',
        payload: location
    }
}
export const deleteLocation = (location) => {
    return {
        type: 'DELETELOCATION',
        payload: location
    }
}

