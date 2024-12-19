import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
        const {productId, quantity} = action.payload;
        const indexItemId = (state.items).findIndex((item)=> item.productId == productId)
        if(indexItemId>=0){
            state.items[indexItemId].quantity += quantity 
        }else{
            state.items.push({productId, quantity})
        }
    }
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer