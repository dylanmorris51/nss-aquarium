const tipsCollection = [
    {
        name: "Filtration:",
        data: "Combined biological and mechanical aquarium filtration systems are common. These either convert ammonia to nitrate (removing nitrogen at the expense of aquatic plants), or to sometimes remove phosphate. Filter media can house microbes that mediate nitrification. Filtration systems are sometimes the most complex component of home aquaria.[60]"
    },
    {
        name: "Check pH:",
        data: "pH is short for the Latin phrase pondus Hydrogenii or the 'weight of Hydrogen"        
    },
    {
        name: "Temperature:",
        data: "A good range is 76° to 80°F (25° to 27°C). A few species need to be kept several degrees warmer, and some species require temperatures a few degrees cooler. A thermometer is vital. A stick-on type enables you to check the temperature whenever you look at the aquarium."
    }
]

export const useTips = () => {
    return tipsCollection.slice()
}