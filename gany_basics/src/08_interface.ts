
// interfaces can extend from other interfaces
// interfaces can be repeatedly declared

interface Greetable {
    greet(): void
}

class Person implements Greetable {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const person1 = new Person('Gany');
person1.greet();

const person2: Greetable = new Person('John');
person2.greet();

interface SimpleJob {
    codingLanguage: string,
    sourceControl: string
}

interface ComplicatedJob extends SimpleJob {
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
}

let complicatedJob: ComplicatedJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

interface MeetingHolder {
    meetingMaxLength: number
    holdMeeting: ()=> void
}

interface MeetingHolder {
    endMeeting: ()=> void
}

class ProjectManager implements MeetingHolder {

    meetingMaxLength = 60;
    holdMeeting = ()=>{
        console.log('Just holding a meeting')
    }
    endMeeting = ()=> {
        console.log('Finally the meeting ended')
    }

}

