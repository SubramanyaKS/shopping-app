export const productSearchReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_SEARCH_RESULTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};