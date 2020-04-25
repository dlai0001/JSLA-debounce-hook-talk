import { useState, useEffect } from "react";
import { searchCharacter } from "../fake-api";
import {debounce} from "lodash"

const DEBOUNCE_DELAY = 1000;

// Debounced incorrectly, using just useState() and useEffect()
export function useDebounceSearchWrong(query) {
    const [results, setResults] = useState([]);    

    const debouncedSearch = debounce(async (query) => {
        const searchResults = await searchCharacter(query);
        setResults(searchResults)
    }, DEBOUNCE_DELAY)

    useEffect(() => {
        debouncedSearch(query)
    }, [query]);

    return results
}