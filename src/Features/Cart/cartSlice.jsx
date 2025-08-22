import { createSlice } from "@reduxjs/toolkit"
 
let cartData = JSON.parse(localStorage.getItem('cart'))||[]

const cartSlice = createSlice({
    name:'cart',
    initialState:cartData,

    reducers:{
        ADDTOCART:(state,action)=>{
            let item = action.payload;
            let existingItem = state.find(cartitem => cartitem.id == item.id)

        if (existingItem){
            existingItem.quantity+=1
        }else{
            state.push(item)
        }
        localStorage.setItem('cart',JSON.stringify(state));
        },
        REMOVE:(state,action)=>{
            let id = action.payload ;
            let updatedCart = state.filter(item =>item.id !== id)
 
            localStorage.setItem('cart',JSON.stringify(updatedCart))
            return updatedCart
            
        },
        INC:(state,action)=>{
            let id = action.payload;
            let existingitem =state.find(item =>item.id == id)
            if (existingitem && existingitem.quantity>1){
            existingitem.quantity-=1
            localStorage.setItem('cart',JSON.stringify(state))
        }
        }

    }
})
export const {ADDTOCART,REMOVE,INC,DEC} =cartSlice.actions
export default cartSlice.reducer;
 