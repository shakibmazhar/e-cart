const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "SET_SEARCH-TERM":
            return {
                ...state,
                searchTerm: action.payload,
            };
        case "ADDTOCART":
            return {
                ...state,
                userCart: state?.userCart?.concat(action.payload),
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                userCart: state?.userCart?.filter(
                    (item) => action.payload !== item.orderId
                ),
            };
        case "INCREASE_QTY":
            return {
                ...state,
                userCart: state?.userCart?.map((item) => {
                    if (action.payload === item.orderId) {
                        item.quantity++;
                    }

                    return item;
                }),
            };
        case "DECREASE_QTY":
            return {
                ...state,
                userCart: state?.userCart?.map((item) => {
                    if (action.payload === item.orderId) {
                        if (item.quantity > 0) item.quantity--;
                    }

                    return item;
                }),
            };
        case "SET_TOTAL":
            return {
                ...state,
                totalPrice: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
