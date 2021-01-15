const fishCollection = [
    {
        img: "https://mission-blue.org/wp-content/uploads/2013/04/image2.jpeg",
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef",
        length: 4,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1520302518758-2c89d092abde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80",
        name: "Sanders",
        species: "Nephropidae",
        location: "Nova Scotia",
        length: 15,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1645&q=80",
        name: "Blitz",
        species: "Greenasaurus",
        location: "Tawain",
        length: 4,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        name: "Buzz",
        species: "Punkquatica",
        location: "Mariana Trench",
        length: 10,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        name: "The Bloopers",
        species: "Blooperium Squadica",
        location: "Mediterranean Ocean",
        length: 3,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1513040260736-63dd0617fb66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1619&q=80",
        name: "Smoky",
        species: "Neonbaton",
        location: "Indian Ocean",
        length: 7,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80",
        name: "Ms. Angel Heart",
        species: "Rosedinae",
        location: "Great Barrier Reef",
        length: 3,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1523585895729-a4bb980d5c14?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=664&q=80",
        name: "Chortle",
        species: "Sea Dragon",
        location: "Cambodia",
        length: 4,
        diet: "Seafood",
    },
    {
        img: "https://images.unsplash.com/photo-1554562622-91f926fc46be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80",
        name: "Blush",
        species: "Floobonibun",
        location: "Madagascar",
        length: 5,
        diet: "Seafood",
    },
];

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    const fishArray = useFish()
    const holyFish = []
    for (const fish of fishArray) {
        // debugger
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    
    const soldiers = []
    const fishArray = useFish()
    for (const fish of fishArray) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const fishArray = useFish()
    const regularFish = []
    for (const fish of fishArray) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
        
    }
    return regularFish
}