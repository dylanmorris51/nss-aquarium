import { useFish } from './Fish/FishDataProvider.js'

const allTheFish = useFish();

for (const fish of allTheFish) {
    console.log(fish);
}

import { FishList } from './Fish/FishList.js'

FishList();



