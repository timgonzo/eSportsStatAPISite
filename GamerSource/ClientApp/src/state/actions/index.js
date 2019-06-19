// import { cart as cartReducer } from "../cart/reducers";
// import { user as userReducer } from "../user/reducers";

// import { people as peopleReducer } from "../people/reducers";

// export const cart = cartReducer;
// export const user = userReducer;
// export const people = peopleReducer;

export const navigation = () => (state = [], action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newCart = {
        ...state,
        count: state.count + action.quantity
      };
      return newCart;

    default:
      return state;
  }
};

export const availableRoutes = () => (state, action) => {
  if (state === undefined) {
    state = [
      {
        path: "/login",
        component: "/compoentnets/path/to/Login.jsx"
      },
      {
        path: "/register",
        component: "/components/path/to/Register.jsx"
      }
    ];
  }
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newCart = {
        ...state,
        count: state.count + action.quantity
      };
      return newCart;

    default:
      return state;
  }
};

export const ui = () => (state = {}, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newCart = {
        ...state,
        count: state.count + action.quantity
      };
      return newCart;

    default:
      return state;
  }
};

export const notifications = () => (state = {}, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newCart = {
        ...state,
        count: state.count + action.quantity
      };
      return newCart;

    default:
      return state;
  }
};
