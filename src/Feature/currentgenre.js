import { createSlice } from "@reduxjs/toolkit";

export const genre = createSlice({
    name: "genre",
    initialState: {
        genreName: "",
        page: 1,
        searchQuery: "",
    },
    reducers: {
        selectGenre: (state, action) => {
            // console.log(action.payload)
            state.genreName = action.payload;
        },
        searchMovie: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});
export const { selectGenre, searchMovie } = genre.actions;
export default genre.reducer;