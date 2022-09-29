import { ADD_TO_CART, LOGIN, SHOWBTN, STYLE, UPDATE_CART } from "./Action";

let initState = {
    token : null,
    movies :[],
    cart :[],
    isAuth : false,
    showButton:false,
    active :{
        div1: "inactive",
        div2: "inactive",
        div3: "inactive",
    },
}


export const MovieReducer = (state = initState, {type,payload}) =>{

    switch (type) {
        case LOGIN:
            console.log(payload)
            return{
                ...state,
                token:payload,
                isAuth:true
            }
           
        case ADD_TO_CART:
            return{
                ...state,
                cart :payload
            }

        case UPDATE_CART:

            let updateCart = [...state.cart]
            updateCart.forEach((item) =>{
               if( item.product_id == payload.product_id){
                   item = payload
               }
            })
            return{
                ...state,
                cart:updateCart
            }

            case STYLE:
                return {
                    ...state,
                    active:payload
                }

            case SHOWBTN:
                return{
                    ...state,
                    showButton:payload
                }
        default:
            return state
    }
}