export namespace Readonly {
    
    interface IPerson {
        name: string;
        age: number;
    }

    interface IReadonlyPerson {
        readonly name: string;
        readonly age: number;
    }

    const person: IPerson = {
        name: 'Alvaro',
        age: 30
    }

    type MyReadonly<T> = {
        readonly [P in keyof T]: T[P]
    }

    function freeze<T>(obj: T) : Readonly<T>{
        return Object.freeze(obj);
    }
    
    const newPerson = freeze(person);

}