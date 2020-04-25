import { useState, useEffect, useRef } from "react";
import { searchCharacter } from "../fake-api";
import {debounce} from "lodash"

const DEBOUNCE_DELAY = 1000;

// Debounced correctly, using just useState() and useEffect(), and useRef()
export function useDebounceSearchRight(query) {
    const [results, setResults] = useState([]);
    const debouncedSearch = useRef()

    useEffect(() => {
        debouncedSearch.current = debounce(async (query) => {
            const searchResults = await searchCharacter(query);            
            setResults(searchResults)
        }, DEBOUNCE_DELAY)
    }, [])

    useEffect(() => {
        debouncedSearch.current(query)
    }, [query]);

    return results
}