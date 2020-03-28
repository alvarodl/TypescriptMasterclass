export namespace Partial {

    interface IPerson {
        name: string;
        age: number
    }

    interface IPartialPerson {
        name?: string;
        age?: number;
    }

    type MyPartial<T> = {
        [P in keyof T]?: T[P];
    };

    function updatePerson(person: IPerson, prop: Partial<IPerson>): IPerson {
        return {...person, ...prop};
    } 

    const person: IPerson = {
        name: 'Alvaro',
        age: 30
    };

    const anotherPerson = updatePerson(person, { name: 'Jeniffer' });

}