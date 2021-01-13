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


export const Location = (location) => {
    return `
    <div class="locationCard">
        <img class="locationImg" src="${location.img}>
        <p class="locationCard__city">${location.city}</p>
        <p class="locationCard__country">${location.country}</p>
        <p class="locationCard__waterBody">${location.waterBody}</p>                
</div>
    `
}