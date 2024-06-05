import {LATESTPRODUCT_ACTION_TYPES} from './latestproducttype';

export const setNewProduct = (product)=>{
    return{type:LATESTPRODUCT_ACTION_TYPES.LATEST_PRODUCT, payload:product}
}