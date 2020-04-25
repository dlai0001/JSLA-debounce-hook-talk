import { useState, useEffect } from "react";
import { searchCharacter } from "../fake-api";
import {debounce} from "lodash"

const DEBOUNCE_DELAY = 5000;

// Debounced incorrectly, using just useState() and useEffect()
export function useDebounceSearchWrong(query) {
    const [results, setResults] = useState([]);    

    const debouncedSearch = debounce(async () => {
        console.log('debounced search called')
        const searchResults = await searchCharacter(query);
        setResults(searchResults)
    }, DEBOUNCE_DELAY)

    useEffect(() => {
        debouncedSearch(query)
    }, [query]);

    return results
}