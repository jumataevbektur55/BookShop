let initialState = {
  products: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE":
      return { ...state, tip: action.payload };
    case "TITLE":
      return { ...state, tip: action.payload };
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "ADD_BASKET":
      let findBasket = state.basket.find((el) => el.id === action.payload);
      if (findBasket) {
        console.log("bar");
      } else {
        let res = [...state.basket, action.payload];
        localStorage.setItem("basket", JSON.stringify(res));
        return { ...state, basket: res };
      }
    case "PLUS":
      let plusBasket = state.basket.find((el) => el.id === action.payload.id);
      if (plusBasket) {
        let plus = state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, guantity: el.guantity + 1 }
            : el
        );
        localStorage.setItem("basket", JSON.stringify(plus));
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, guantity: el.guantity + 1 }
              : el
          ),
        };
      }
    case "MINUS":
      let minusBasket = state.basket.find((el) => el.id === action.payload.id);
      if (minusBasket) {
        let plus = state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, guantity: el.quantity > 1 ? el.guantity - 1 : 1 }
            : el
        );
        localStorage.setItem("basket", JSON.stringify(plus));
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, guantity: el.quantity > 1 ? el.guantity - 1 : 1 }
              : el
          ),
        };
      }
    case "SORT_PRODUCT":
      if ("expensive" === action.payload) {
        let sortPro = state.products.sort((a, b) => a.price - b.price);
        localStorage.setItem("product", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      } else if ("chear" === action.payload) {
        let sortPro = state.products.sort((a, b) => b.price - a.price);
        localStorage.setItem("product", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      } else if ("A-Z" === action.payload) {
        let sortPro = state.products.sort((a, b) => (a.name < b.name ? -1 : 1));
        localStorage.setItem("product", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      } else if ("Z-A" === action.payload) {
        let sortPro = state.products.sort((a, b) => (a.name > b.name ? -1 : 1));
        localStorage.setItem("product", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      }
    case "DELETE_BASKET":
      let filterDel = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(filterDel));
      return {
        ...state,
        basket: filterDel,
      };
      case "DELETE_PRODUCT":
        let filter = state.products.filter((el) => el.id !== action.payload.id);
        localStorage.setItem("product", JSON.stringify(filter));
        return {
          ...state,
          products: filter,
        };
  

    default:
      return state;
  }
};
