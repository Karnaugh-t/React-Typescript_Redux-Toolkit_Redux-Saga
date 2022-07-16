import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState{
    value: number;
    incrementAmount: number;
}


const initialState: CounterState = {
    value: 0,
    incrementAmount: 1
}

export const counterSlice = createSlice({
    name: 'counterReducer',
    initialState: initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            console.log(`Payload desde UI`)
            console.log(action.payload)
        },

        decrement: (state) => {
            state.value -= state.incrementAmount
        },
        changeValueIncrement: (state, action :PayloadAction<number>) => {
            state.incrementAmount = action.payload;
        }
    }
});

export const {increment, decrement, changeValueIncrement} = counterSlice.actions;

export default counterSlice.reducer;