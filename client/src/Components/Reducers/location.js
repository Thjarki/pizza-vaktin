const locationList = (state = [], action) => {
    switch(action.type){
        case 'ADDLOCATION':
            if(!state.includes(action.payload)){
                state.push(action.payload);
            }
            return state;
        case 'DELETELOCATION':
            var index = state.indexOf(action.payload);
            if (index !== -1) state.splice(index, 1);
            return state;
        default: 
            return state;
    }
}
export default locationList;