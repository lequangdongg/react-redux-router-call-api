import * as Types from './../contans/ActionTypes';

let initialState = {};

const itemEditting = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT: 
            return action.product
        default: 
            return state;
    }
}
export default itemEditting