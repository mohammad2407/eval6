export const LOGIN = "LOGIN"
export const  ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART"
export const login = (token) =>{
    console.log(token)
    return{
        type : LOGIN,
        payload : token
    }
}

export const addToCart = (cart) =>{
    return{
        type: ADD_TO_CART,
        payload:cart
    }
}

export const updateCart = (updatedCart) =>{
    return{
        type:UPDATE_CART,
        payload:updatedCart
    }
}

