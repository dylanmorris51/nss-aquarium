import { useFish, mostHolyFish, nonHolyFish, soldierFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"



const buildFishListHTML = (arrayOfFish, heading) => {
    let fishHTMLRepresentations = `<h3>${heading}<h3>`
    for (const fishObj of arrayOfFish) {
        fishHTMLRepresentations += Fish(fishObj)
        console.log(fishHTMLRepresentations)
    }
    return fishHTMLRepresentations
}



export const FishList = () => {
    const contentElement = document.querySelector(".containerLeft")
    // const fishes = useFish()

    // let fishHTMLRepresentations = ""
    // for (const fish of fishes) {
    //     fishHTMLRepresentations += Fish(fish)
        
    // }

    const holyFishArray = mostHolyFish()
    const holyFishHTMLRepresentations = buildFishListHTML(holyFishArray, "Holy Fish")
    
    const soldierFishArray = soldierFish()
    const soldierFishHTMLRepresentations = buildFishListHTML(soldierFishArray, "Soldier Fish")
    
    const regularFishArray = nonHolyFish()
    const regularFishHTMLRepresentations = buildFishListHTML(regularFishArray, "Regular Fish")


    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
            ${holyFishHTMLRepresentations}
            ${soldierFishHTMLRepresentations}
            ${regularFishHTMLRepresentations}
        </article> 
    `
}





