import { useFish } from './Fish/FishDataProvider.js'

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