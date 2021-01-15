import { useFish, mostHolyFish, soldierFish, nonHolyFish } from './Fish/FishDataProvider.js'

const holyFish = mostHolyFish()
console.log("Holy Fish:", holyFish)
const soldiers = soldierFish()
console.log("Soldier Fish:", soldiers)
const regularFish = nonHolyFish()
console.log("Regular Fish:", regularFish)

const allTheFish = useFish();

for (const fish of allTheFish) {
    console.log(fish);
}

import { FishList } from './Fish/FishList.js'

FishList();


import { useTips } from './Tips/TipDataProvider.js'
import { TipsList } from './Tips/TipList.js'

const allTheTips = useTips()

for (const tip of allTheTips) {
    console.log(tip)
}

TipsList()

import { useLocation } from './Locations/LocationDataProvider.js'
import { LocationList } from './Locations/LocationList.js'

const allTheLocations = useLocation()
for (const location of allTheLocations) {
    console.log(location)
}
LocationList()

import { useQuote } from './Quotes/QuoteDataProvider.js'
import { QuotesList } from './Quotes/QuoteList.js'


const allTheQuotes = useQuote() 
for (const quote of allTheQuotes) {
    console.log(quote)
}
QuotesList()


