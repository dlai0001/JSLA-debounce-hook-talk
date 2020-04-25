import { useState, useEffect } from "react";
import { searchCharacter } from "../fake-api";

// Not debounced, using just useState() and useEffect()
export function useSearchState(query) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const doSearch = async () => {
            const searchResults = await searchCharacter(query);
            setResults(searchResults)
        }
        doSearch()
    }, [query]);

    return results
}