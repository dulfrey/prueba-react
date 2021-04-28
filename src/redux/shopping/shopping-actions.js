import * as actionTypes from './shopping-types';
import axios from 'axios'
export const requesApiData = (data) => {
    return (dispatch) =>{
        
        axios.get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
        .then( response => {
            const products = response.data
            dispatch(fetchProductsSuccess(products))
        }).catch(error => {
            console.log(error)
            
        })
    }
}

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            item: item
        }
    }
}

export const fetchProductsSuccess = (products)=>{
    return {
        type : actionTypes.REQUEST_DATA,
        payload:{
            products: products
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID , value) =>{

    return {
        type: actionTypes.ADJUST_QTY,
        payload:{
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }

}