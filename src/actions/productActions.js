import {FETCH_PRODUCTS} from "../types";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
    });
};

