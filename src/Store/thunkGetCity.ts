//* --- THUNK
import { createAsyncThunk } from "@reduxjs/toolkit";

//* AXIOS
import axios from "axios";

const thunkGetCity = createAsyncThunk(
    "FETCH_CITY",
    async (postalCode: number) => {
        // FETCH
        const result = await axios.get(
            `https://api.zippopotam.us/fr/${postalCode}`
        );
        // console.log(result);

        // on return les infos de la ville
        return result.data;
    }
);
export default thunkGetCity;
