import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import persistStore from "redux-persist/es/persistStore";


const store=configureStore({
    reducer:RootReducer,
});
export const persistor=persistStore(store);
export default store;