let apple: number = 5;
let speed: string = 'fast'

let notingMuch: null = null
let nothing: undefined = undefined


//built in objects
let now: Date = new Date()

//arrays
let colors: string[] = ['red', 'green']
let myNumbers: number[] = [1, 2, 3]

//classes
class Car {
    
}

let car: Car = new Car()


//object literals
let point: { x: number; y: number } = {
    x: 10,
    y: 15
}



//functions type annotations
// define what different values a function going to take and what going to return
const logNumber1 = (i) => {
    console.log(i)
}

const logNumber2: (i: number) => void = (i) => {
    console.log(i)
}


//type script any type
let json = '{"x":10, "y":20}'
let coordiantes = JSON.parse(json) // here have type any due to json.parse is unpredictable by typescript
console.log(coordiantes)

// so soltion is to avoid the any type using
let coordiantes2: { x: number; y: number } = JSON.parse(json)
console.log(coordiantes2)
