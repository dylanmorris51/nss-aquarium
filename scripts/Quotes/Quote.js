// export const Fish = (fish) => {
//     return `
//         <section class="fishCard"
//             <div><img class="fish__image image--card" src="${fish.img}" /></div>
//             <div class="fish__name">${fish.name}</div>
//             <div class="fish__species">${fish.species}</div>
//             <div class="fish__length">${fish.length}</div>
//             <div class="fish__location">${fish.location}</div>
//             <div class="fish__diet">${fish.food}</div>
//         </section>    
//             `
// }

export const Quote = (quote) => {
    return `
    <div class="quoteCard">
        <img class="quoteCardImg" src="${quote.img}>
        <p class="quoteCard__text">${quote.text}</p>                
        <p class="quoteCard__location">${quote.location}</p>
        <p class="quoteCard__date">${quote.date}</p>
    </div>
    `
}