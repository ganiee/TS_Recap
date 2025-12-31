class Student {
    // fields
    name: string
    age?: number

    // constructor function
    constructor(name: string, age?: number) {
        this.name = name;
        if (age !== undefined) {
            this.age = age;
        }
    }

    // methods
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
    public setAge(newAge: number) {
        this.age = newAge
    }   
}   

const student1 = new Student('Gany', 28);
student1.greet();

const student2 = new Student('John');
student2.greet();   
student2.setAge(30);
student2.greet();
process.exit






class Project {

    // fields:
    name: string
    private budget: number

    // constructor function
    constructor(name: string, budget?: number) {
        this.name = name;
        if (budget) {
            this.budget = budget
        } else {
            this.budget = 10000;
        }
    }

    setBudget(newBudge: number) {
        this.budget = newBudge
    }

    // methods
    printBudget(){
        console.log(`${this.name} has a budget of ${this.budget}`)
    }

    // a class should have one or few public methods
    // many private methods - organize the code
    
    calculateYearlyBudget(){
        // get inflation index
        this.getInflationIndex()
        // do calculations
        // get other info
        this.getInfo()
        // return budget
    }

    private getInflationIndex(){}
    private getInfo(){}
}

const coolProject = new Project('Cool Name', 20000);
const defaultProject = new Project('Default project');
coolProject.setBudget(1000)
coolProject.calculateYearlyBudget()