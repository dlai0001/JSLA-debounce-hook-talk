import { useState, useEffect, useRef } from "react";
import { searchCharacter } from "../fake-api";
import {debounce} from "lodash"

const DEBOUNCE_DELAY = 5000;

// Debounced correctly, using just useState() and useEffect(), and useRef()
export function useDebounceSearchRight(query) {
    const [results, setResults] = useState([]);
    const debouncedSearch = useRef()

    useEffect(() => {
        debouncedSearch.current = debounce(async () => {
            console.log('debounced search called')
            const searchResults = await searchCharacter(query);
            console.log('debounced setting results')
            setResults(searchResults)
        }, DEBOUNCE_DELAY)
    }, [])

    useEffect(() => {
        debouncedSearch.current(query)
    }, [query]);

    return results
}