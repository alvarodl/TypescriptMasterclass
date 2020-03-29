interface IPerson {
    name: string;
    age: number;
    address: {}
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

const person: MyPick<IPerson, 'name' | 'age'> = {
    name: 'Alvaro',
    age: 30
}

const anotherPerson: Pick<IPerson, 'name'| 'age'> = {
    name: 'Jeniffer',
    age: 28
};