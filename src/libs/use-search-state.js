import { useState, useEffect } from "react";
import { searchCharacter } from "../fake-api";

// Not debounced, using just useState() and useEffect()
export function useSearchState(query) {
    const [results, setResults] = useState([]);

    // Simple usage of useEffect() as an observer.  It gets executed everytime 'query' changes.
    useEffect(() => {
        let current = true

        // Use effect cannot call async functions.  But you can define
        // async actions inside it by wrapping it inside.
        const doSearch = async () => {
            const searchResults = await searchCharacter(query);
            current && setResults(searchResults)
        }
        doSearch()        

        return () => {
            // It's good practice to put a short circuit when dealing with async calls.
            // This will prevent async calls from updating a stale component.
            current = false
        }
    
        // Array in useEffect acts like an observer.  This effect gets called 
        // every time any of the values in this array changes.
    }, [query]);

    return results
}