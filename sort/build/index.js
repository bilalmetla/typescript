"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([2, 8, 6, 4, 1, 0, 9]);
var sort = new Sorter_1.Sorter(numbersCollection);
sort.sort();
console.log(sort.collection);
