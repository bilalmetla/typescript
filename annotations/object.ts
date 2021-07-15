const profile = {
    name: 'abv',
    age: 20,
    coords: {
        lat: 1212,
        lang: 2121
    },
    setAge(age): void {
        this.age = age;
     }
}

//destructuring objects with types

const { age }: { age: number } = profile
const { coords: { lat, lang } }: { coords: { lat: number; lang: number } } = profile

