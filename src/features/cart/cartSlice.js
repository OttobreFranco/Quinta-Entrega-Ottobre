import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state,action) => {
            const productsRepeated = state.items.find(
                item => item.id === action.payload.id
                )
                if (productsRepeated){
                    const itemsUpdated = state.items.map(item => {
                        if(item.id === action.payload.id){
                            item.quantity += action.payload.quantity
                            return item
                        }
                        return item
                    })
                    const total = itemsUpdated.reduce(
                        (acc, current) => (acc += current.price * current.quantity)
                    )
                    state = {
                        ...state,
                        items : itemsUpdated, 
                        updatedAt : new Date().toLocaleString()
                    }
                } else {
                    state.items.push(action.payload)
                    const total = state.items.reduce(
                        (acc,current) => (acc += current.price * current.quantity)
                    )
                        state = {
                            ...state,
                            total,
                            updatedAt: new Date().toLocaleString(),
                        }
                }
        },

        removeItem: (state,action) => {

        }

    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer