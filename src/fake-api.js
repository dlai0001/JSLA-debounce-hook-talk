import gotData from "./got"

const DELAY = 2000

export function searchCharacter(query) {
    console.log("API: search api called")
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("API: resolving search results")
            resolve(
                gotData.characters.filter(x =>
                    x.characterName &&
                    x.characterName.toLowerCase().includes(query.toLowerCase())
                )
            )
        }, DELAY)
    })    
}