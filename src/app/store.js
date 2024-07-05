import { configureStore } from '@reduxjs/toolkit'
import { TMDBAPI } from '../services/Api'
import genreReducer from '../Feature/currentgenre';


export default configureStore({
  reducer: {
    [TMDBAPI.reducerPath]: TMDBAPI.reducer,
    currentGenre: genreReducer
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(TMDBAPI.middleware)
})