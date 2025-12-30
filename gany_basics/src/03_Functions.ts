
function greet(name: string) {
    return ('Hello ' + name)
}

function sayHello(name: string): string {
    return ('Hello ' + name)
}   

function sayHelloToConsole(name: string): void {
    console.log('Hello.... ' + name);
}

console.log(sayHello('Gany').toUpperCase())


const johnGreet = greet('John');

function greetToUpperCase(name: string){
    return ('Hello ' + name.toUpperCase())
}

function consoleGreetJohn(name = 'John') {
    console.log('Hello ' + name.toUpperCase())
}

consoleGreetJohn();
consoleGreetJohn('Bil')

const greetToConsole = (name: string) =>{
    console.log('Hello ' + name);
}

function greetMultiple(...names: string[]) {
    names.forEach(name => {
        sayHelloToConsole(name)
    })
}

greetMultiple('John');
greetMultiple('John', 'Mary','Gany ','Santy')
