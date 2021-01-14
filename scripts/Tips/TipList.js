import { Tips } from "./Tip.js"
import { useTips } from './TipDataProvider.js'

export const TipsList = () => {
    const contentElement = document.querySelector(".containerRight")
    const tips = useTips()

    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        tipsHTMLRepresentations += Tips(tip)
    }

    contentElement.innerHTML += `
        <article class="tipsList">
            ${tipsHTMLRepresentations}
        </article>
        `
}