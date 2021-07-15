

import {Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([2, 8, 6, 4, 1, 0, 9])
const sort = new Sorter(numbersCollection)
sort.sort()
console.log(sort.collection)