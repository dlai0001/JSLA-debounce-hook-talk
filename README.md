# JavaScriptLA - Lighting Talks
## Building a Debounced Search Hook

https://javascriptla.net/

This is code demonstrating building Debounced Search using hooks by David Lai

* use-search-state - implemented without debounce.
* use-debounce-search-state-wrong - implemented using lodash debounce incorrectly.
* use-debounce-search-state-right - implemented using lodash debounce with refs.

Key takeaways:
* useEffect() can be used as an observer.
* Remember that things defined in the function scope gets run on each render.
* Use useRef() hook to create a reference that gets preserved between rerenders around it.

### About David
David is a fullstack engineer working at a French stealth startup.  He is currently
working on React Native / Graphql / Django stack.  David is a resident of LA, and
enjoys programming, cooking, and fitness.

https://www.linkedin.com/in/david-lai-37211/