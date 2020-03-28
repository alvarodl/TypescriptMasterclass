export namespace TypeOf {

    const person = {
        name: 'Alvaro',
        age: 30
    };

    type Person = typeof person;

    const anotherPerson: Person = {
        name: 'Jeniffer',
        age: 28
    };

}


