import { useState, useEffect } from "react";
import { searchCharacter } from "../fake-api";
import {debounce} from "lodash"

const DEBOUNCE_DELAY = 1000;

// Debounced incorrectly, using just useState() and useEffect()
export function useDebounceSearchWrong(query) {
    const [results, setResults] = useState([]);
    const [current, setCurrent] = useState(true)

    // Notice that the debounced function is being defined inside the component.
    // The problem here gets redefined in the function scope upon each chate/render.
    const debouncedSearch = debounce(async (query) => {
        const searchResults = await searchCharacter(query);
        console.log("<<< current", current)
        current && setResults(searchResults)
    }, DEBOUNCE_DELAY)

    useEffect(() => {        
        debouncedSearch(query)
    }, [query]);

    // Because the debounce is defined outside the useEffect(), we'll have to use
    // save the short circuit state separately.  In this usage of useEffect using
    // an empty array, this works similarly to componentDidMount() in old style 
    // class based components.
    useEffect(() => {        
        return () => {
            setCurrent(false)
        }
    }, [])

    return results
}