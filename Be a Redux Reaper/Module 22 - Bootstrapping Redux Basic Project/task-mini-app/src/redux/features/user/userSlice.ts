import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the IUser interface
interface IUser {
  id: string;
  name: string;
}

// Define the InitialState interface
interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (user: DraftUser): IUser => {
  return {
    ...user,
    id: uuidv4(),
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUsers = (state: { user: InitialState }) => state.user.users;
export default userSlice.reducer;