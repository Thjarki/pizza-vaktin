const specificToppingList = (state = [], action) => {
    switch(action.type){
        case 'ADDSPECIFICTOPPING':
            if(!state.includes(action.payload)){
                state.push(action.payload);
            }
            return state;
        case 'DELETESPECIFICTOPPING':
            var index = state.indexOf(action.payload);
            if (index !== -1) state.splice(index, 1);
            return state;
        default: 
            return state;
    }
}
export default specificToppingList;