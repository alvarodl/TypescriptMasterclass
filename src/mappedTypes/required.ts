export namespace Required {

    interface IPerson {
        name: string;
        age?: number
    }

    type MyRequired<T> = {
        [P in keyof T]-?: T[P] 
    }

    function printAge(person: Required<IPerson>) {
        return `${person.name} is ${person.age}`;
    }

    const person: Required<IPerson> = {
        name: 'Jeniffer',
        age: 28
    };

    const age = printAge(person);

}