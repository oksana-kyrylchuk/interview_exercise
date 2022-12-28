import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface UsersState {
  usersList: IUser[];
  userDetails: IUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  usersList: [],
  userDetails: null,
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = '';
      state.usersList = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setDetails(state, action: PayloadAction<number>) {
      state.userDetails =
        state.usersList.find((user) => user.id === action.payload) || null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
