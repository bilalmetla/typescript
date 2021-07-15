"use strict";
var SorterBad = /** @class */ (function () {
    //collection: number[]
    function SorterBad(collection) {
        this.collection = collection;
        //this.collection = collection;
    }
    SorterBad.prototype.sort = function () {
        var length = this.collection.length;
        //type guards for numbers
        if (this.collection instanceof Array) {
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        // type guad for string
        if (typeof this.collection === 'string') {
        }
    };
    return SorterBad;
}());
var sort = new Sorter([2, 8, 6, 4, 1, 0, 9]);
sort.sort();
console.log(sort.collection);
