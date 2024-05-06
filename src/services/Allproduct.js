import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const APP_ID = "7f6c4842";
const APP_KEY = "aa327f006fd155a38c0a83da812b3774";

export const getRecipes = createAsyncThunk('api/allproducts', async (option) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${option}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    return response.data.hits; // Assuming data.hits contains the recipes array
});
export const fetchSearchProducts = createAsyncThunk('api/detailfetch', async (option) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${option}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    return response.data.hits; // Assuming data.hits contains the recipes array
});
export const fetchSearchmealType = createAsyncThunk('api/mealfetch', async (option) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${option}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    return response.data.hits; // Assuming data.hits contains the recipes array
});
export const fetchDietLabel = createAsyncThunk('api/dietfetch', async (option) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${option}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    return response.data.hits; // Assuming data.hits contains the recipes array
});
export const fetchFilteredData = createAsyncThunk(
    'filter/fetchFilteredData',
    async (healthTypes) => {
        const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthTypes}`
        );
        return response.data.hits;
    }
);

export default getRecipes;
// export const setData = (data) => ({
//     type: 'allproducts/setData',
//     payload: data,
// });

// export const clearData = () => ({
//     type: 'allproducts/clearData',
//     meta: {
//         resettable: true,
//     },
// });