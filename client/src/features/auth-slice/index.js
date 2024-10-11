import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
}

const authSlice = createSlice(
    {
        name: 'auth-slice',
        initialState,
        reducers : {
            setUser: (state, action) => {
                
            }
        }

    }
);


export const {setUser} = authSlice.actions;
export default authSlice.reducer;