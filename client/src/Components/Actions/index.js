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

export const addSpecificTopping = (location) => {
    return {
        type: 'ADDSPECIFICTOPPING',
        payload: location
    }
}
export const deleteSpecificTopping = (location) => {
    return {
        type: 'DELETESPECIFICTOPPING',
        payload: location
    }
}
export const emptyToppingArray = (topping) => {
    return {
        type: 'EMPTYTOPPINGARRAY',
        payload: topping
    }
}