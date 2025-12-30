
// enum position {
//     Programmer = 'Programmer',
//     HR = 'HR',
//     Sales = 'Sales'
// }

// type Employee = {
//     name: string,
//     age: number,
//     position: position
// }

// const emp1: Employee = {
//     name: 'Gany',
//     age: 30,
//     position: position.Programmer
// }
// const emp2: Employee = {
//     name: 'John',
//     age: 28,
//     position: position.HR
// }


// enums: a group of constants
enum Position {
    Programmer = 'Programmer',
    HR = 'HR',
    Manager = 'Manager',
    /**
     * Must receive at least 2000% yearly bonus
     */
    CEO = 'CEO'
}

type Employee = {
    name: string
    salary: number
    position: Position
    level?: EmployeeLevel
}

enum EmployeeLevel {
    Junior = 1,
    Mid = 2,
    Senior = 3,
    Lead = 4,
}

function payBonus(empl: Employee) {
    // Pay CEO bonus:
    if (empl.position === Position.CEO) {
        // surprize bonus
    }
}

/**
 * CEO bonus: ...
 * Programer bonus: ...
 */
type PositionType =
    | 'Programmer'
    | 'HR'
    | 'CEO'

function payAnnualBonus(empl: Employee) {
    let bonusPercent: number = 0;
    switch (empl.position) {
        case Position.Programmer:
            bonusPercent = 0.2
            break;
        case Position.HR:
            bonusPercent = 0.8
            break;
        case Position.CEO:
            bonusPercent = 200
            break;
        default:
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}, with level ${empl.level}`)
}

const emp1: Employee = {
    name: 'Gany',
    salary: 5000,
    position: Position.CEO,
    level: EmployeeLevel.Lead
}
const emp2: Employee = {
    name: 'John',
    salary: 4000,
    position: Position.Programmer,
    level: EmployeeLevel.Junior
}   

payAnnualBonus(emp1);
payAnnualBonus(emp2);