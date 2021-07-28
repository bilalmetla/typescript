

class Color {
    color: string = 'red'


    get formatedColor(): string{
        return `
        This boat color is ${this.color}
        `
    }

    @testDecorator
    pilot(): void {
        console.log(`swish...`)

    }



}



function testDecorator(target: any, key: string): void {
    console.log(`Target:`, target)
    console.log(`Kye: ${key}`)
}