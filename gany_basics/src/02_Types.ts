// Type aliases: define the shape of an object

type StringOrNumber = string | number

type Position = 'Programmer' | 'HR' | 'Sales'


type Colleague = {
    name: string,
    age: number,
    position: Position,
    greetBack?: (this: Colleague) => void;
}

const santy: Colleague = {
    name: 'Santy',
    age: 28,
    position: 'Sales',
    greetBack: function (this: Colleague) {
        console.log(`Hi there!, from ${this.name}`)
    }
}


const gany: Colleague = {
    name: 'Gany',
    age: 28,
    position: 'Sales',
    greetBack: function (this: Colleague) {
        console.log(`Hi there!, from ${this.name}`)
    }
}



const myColleague: Colleague = {
    name: 'John',
    age: 30,
    position: "Programmer"
}

const myOtherColleague: Colleague = {
    name: 'Bil',
    age: 30,
    position: "Programmer",
    greetBack: () => {
        console.log("hello!")
    }
}

function greetColleague(colleague: Colleague) {
    console.log('Hi ' + colleague.name);
    if (colleague.greetBack) {
        colleague.greetBack()
    }
}

// greetColleague(myColleague);
// greetColleague(myOtherColleague)

greetColleague(gany);
greetColleague(santy)

