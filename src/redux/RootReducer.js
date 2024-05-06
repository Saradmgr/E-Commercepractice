import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createResetMetaReducer } from "./slices/metaReducer";
import storage from "redux-persist/lib/storage";
import Allproducts from "./slices/Allproducts";
import Detailsfetch from "./slices/Detailsfetch";
import mealfetch from "./slices/SearchMeal";
import AddToCart from "./slices/AddToCart";
import authSlice from "./slices/LoginSlices"
import Favourite from "./slices/Favourite";
import filterslice from "./slices/filterslice";
import dietfetch from "./slices/dietfetch";

const resetSlices=[
    "addToCart",
    "allproducts",
    "detailsfetch",
    "mealfetch",
    "auth",
    "favourite",
    "filter",
    "dietfetch"
]
const rootReducer=createResetMetaReducer(
    "GLOBAL_RESET",
    resetSlices,
)(
    combineReducers({
        addToCart:AddToCart,
        allproducts:Allproducts,
        detailsfetch: Detailsfetch,
        mealfetch:mealfetch,
        authSlice:authSlice,
        favourite:Favourite,
        filter:filterslice,
        dietfetch:dietfetch,
    })
);
const persistConfig={
    key: "root",
    storage,
    whitelist: resetSlices,
}
export default persistReducer(persistConfig, rootReducer);