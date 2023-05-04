import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};



const userSlice = createSlice({
  name: "users",
  initialState,
  // extraReducers: (builder) => {
  //   builder.addCase("users/getUsers/pending", (state, action) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase("users/getUsers/fulfilled", (state, action) => {
  //     state.data = action.payload;
  //     state.isLoading = false;
  //     state.isSuccess = true;
  //   });
  //   builder.addCase("users/getUsers/rejected", (state, action) => {
  //     state.isLoading = false;
  //     state.isSuccess = false;
  //     state.errorMessage = action.payload;
  //   });
  // },

  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
      console.log(state)

    },
    editUser: (state, action) => {
      const index = state.data.findIndex((user) => user.id === action.payload.id);
      state.data[index] = action.payload;
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    }

  },
});

export default userSlice.reducer;
export const { addUser, editUser, deleteUser } = userSlice.actions;
