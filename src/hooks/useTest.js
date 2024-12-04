import { useDispatch } from "react-redux";
import { fetchMovies } from "../data/moviesSlice";
import { useRef, useState } from "react";
import { ENDPOINT_DISCOVER } from "../constants";

const useTest = () => {
    const dispatch = useDispatch();
    const page = useRef(1);
    
    const getNextPage = () => {
        page.current = page.current + 1;
        dispatch(fetchMovies(`${ENDPOINT_DISCOVER}&page=${page.current}`));
    }

    return {
        getNextPage
    }
}

export default useTest
