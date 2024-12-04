import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('fetch-movies', async (apiUrl) => {
    await new Promise((resolve) => setTimeout(() => resolve(),3000))
    const response = await fetch(apiUrl)
    return response.json()
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: { 
        movies: {
            results: []
        },
        fetchStatus: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            const oldMovies = current(state).movies.results

            state.movies = {
                ...action.payload,
                results: [...oldMovies,...action.payload.results]
            }
            state.fetchStatus = 'success'
        }).addCase(fetchMovies.pending, (state) => {
            state.fetchStatus = 'loading'
        }).addCase(fetchMovies.rejected, (state) => {
            state.fetchStatus = 'error'
        })
    }
})

export default moviesSlice
