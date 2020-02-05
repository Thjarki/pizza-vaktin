const specificToppingList = (state = false, action) => {
  switch (action.type) {
    case "SETSPECIFICTOPPING": {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};
export default specificToppingList;
