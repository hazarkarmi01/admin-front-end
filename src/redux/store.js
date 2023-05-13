import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import CategoryReducer from "./reducers/category.reducer";
import UserReducer from "./reducers/user.reducer";
import annonceReducer from "./reducers/annonce.reducer";

export const store = configureStore({
  reducer: { users: UserReducer, auth: authReducer, category: CategoryReducer,annonce:annonceReducer },
});
