const locationCollection = [
    {
        img: "https://images.unsplash.com/photo-1606761237847-779e4b4cda30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        city: "Honolulu",
        country: "United States",
        waterBody: "Pacific"
    },
    {
        img: "https://images.unsplash.com/photo-1533991310801-340302384c22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        city: "Orlando",
        country: "United States",
        waterBody: "Atlantic"
    },
    {
        img: "https://images.unsplash.com/flagged/photo-1557533046-154fc97b729f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        city: "Oranjestad",
        country: "Aruba",
        waterBody: "Caribbean"
    },
    {
        img: "https://images.unsplash.com/photo-1602174423520-daa2d87175a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        city: "Jungle Coast",
        country: "Madagascar",
        waterBody: "Indian Ocean"
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}