

import {Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedLIst } from "./LinkedLIst";

const numbersCollection = new NumbersCollection([2, 8, 6, 4, 1, 0, 9])
//const sort = new Sorter(numbersCollection)
//sort.sort()
numbersCollection.sort()
console.log(numbersCollection.data)


console.log('soring strings..')
const ch = new CharactersCollection('XelloBilal')
//const chSort = new Sorter(ch)
//chSort.sort()
ch.sort()
console.log(ch.data)

//testing
const list = new LinkedLIst()
list.add(46)
list.add(31)
list.add(26)
list.add(2)
list.add(100)
list.add(7)

//const listSort = new Sorter(list)
//listSort.sort()
list.sort()
console.log(`list:`, list)