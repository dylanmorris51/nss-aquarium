// import { useFish } from './FishDataProvider.js'
// import { Fish } from "./Fish.js"

// export const FishList = () => {
//     const contentElement = document.querySelector(".containerLeft__fishList")
//     const fishes = useFish()

//     let fishHTMLRepresentations = ""
//     for (const fish of fishes) {
//         fishHTMLRepresentations += Fish(fish)
        
//     }


//     contentElement.innerHTML += `
//         <article class="fishList">
//             ${fishHTMLRepresentations}
//         </article> 
//     `
// }

import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {
    const contentElement = document.querySelector(".containerLeft")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
    }

    contentElement.innerHTML += `
        <article class="containerLeft__travelLocations contentArticle">
            ${locationHTMLRepresentations}
        </article>
        `
}