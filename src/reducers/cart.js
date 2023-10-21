
// Define cart actions
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

let increasedItemIndex = null;
let decreasedItemIndex = null;
let existingItemIndex = null

// Reducer function to handle cart actions
export const cartReducer = (state, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      // Increase the quantity of a specific item
      increasedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (increasedItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[increasedItemIndex] = {
          ...updatedCartItems[increasedItemIndex],
          quantity: updatedCartItems[increasedItemIndex].quantity + 1,
        };
      
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
       else {
        return state;
      }

    case DECREASE_QUANTITY:
      // Decrease the quantity of a specific item
      console.log("Called DEC")
      decreasedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      console.log("Called",state.cartItems[decreasedItemIndex].quantity)

      if (decreasedItemIndex !== -1 && state.cartItems[decreasedItemIndex].quantity > 1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[decreasedItemIndex] = {
          ...updatedCartItems[decreasedItemIndex],
          quantity: updatedCartItems[decreasedItemIndex].quantity - 1,
        };
      
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return state;
      }
    case ADD_TO_CART:
      // Check if the item is already in the cart
      existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If it's in the cart, update the quantity
        state.cartItems[existingItemIndex].quantity++;
        return { ...state };
      } else {
        // If it's not in the cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
      
      case CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };
    
    case UPDATE_QUANTITY:
      // Action to update the quantity of a product in the cart
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.productId) {
            // Update the quantity of the specified product
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};