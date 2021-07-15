class SorterBad {
    //collection: number[]

    constructor(public collection: number[] | string) {
        //this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection

        //type guards for numbers
        if (this.collection instanceof Array) {
        
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j+1]) {
                        let temp = this.collection[j]
                        this.collection[j] = this.collection[j + 1]
                        this.collection[j+1] = temp
                    }
                }
            }
        }

        // type guad for string
        if (typeof this.collection === 'string') {
            
        }
        
    }


}

const sort = new Sorter([2, 8, 6, 4, 1, 0, 9])
sort.sort()
console.log(sort.collection)