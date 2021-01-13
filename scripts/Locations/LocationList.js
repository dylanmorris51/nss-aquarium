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
import { Location } from './LocationList.js'

export const LocationList = () => {
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
    }

    contentElement.innerHTML += `
        <article class="locationList>
            ${locationHTMLRepresentations}
        </article>
        `
}