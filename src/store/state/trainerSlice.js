import { createSlice } from '@reduxjs/toolkit';


export const trainer = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer: (state,action) => action.payload

    }
})

export const { setTrainer } = trainer.actions;

export default trainer.reducer;
