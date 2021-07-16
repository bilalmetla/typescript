"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedLIst_1 = require("./LinkedLIst");
var numbersCollection = new NumbersCollection_1.NumbersCollection([2, 8, 6, 4, 1, 0, 9]);
//const sort = new Sorter(numbersCollection)
//sort.sort()
numbersCollection.sort();
console.log(numbersCollection.data);
console.log('soring strings..');
var ch = new CharactersCollection_1.CharactersCollection('XelloBilal');
//const chSort = new Sorter(ch)
//chSort.sort()
ch.sort();
console.log(ch.data);
//testing
var list = new LinkedLIst_1.LinkedLIst();
list.add(46);
list.add(31);
list.add(26);
list.add(2);
list.add(100);
list.add(7);
//const listSort = new Sorter(list)
//listSort.sort()
list.sort();
console.log("list:", list);
