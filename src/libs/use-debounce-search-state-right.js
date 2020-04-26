import { useState, useEffect, useRef } from "react";
import { searchCharacter } from "../fake-api";
import { debounce } from "lodash"

const DEBOUNCE_DELAY = 1000;

// Debounced correctly, using just useState() and useEffect(), and useRef()
export function useDebounceSearchRight(query) {
    const [results, setResults] = useState([]);
    
    // useRef is useful when you either 
    // 1. use it as a ref to directly reference a dom element for UI manipulation
    // 2. storing values outside of the function component's local scope.
    // We're using it for the latter.
    const debouncedSearch = useRef()

    useEffect(() => {
        let current = true
        
        // Here we are using the useRef() to store our debounced function
        // between rerenders.  useRef returns an object which is a reference,
        // and by convention, we use the property current to point to the
        // latest value.  In this case, we'll use current to store the debounced
        // function.
        debouncedSearch.current = debounce(async (query) => {
            const searchResults = await searchCharacter(query);

            current && setResults(searchResults)

        }, DEBOUNCE_DELAY)

        return () => {
            current = false
        }
    }, [])
    
    // Now we can use the ref.current to call the saved instance of the 
    // debounced fuction.
    useEffect(() => {
        debouncedSearch.current(query)
    }, [query]);

    return results
}