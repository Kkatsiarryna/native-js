export type ManType = {
    name: string;
    age: number;
};

const people: Array<ManType> = [
    { name: 'Andrew Ivanov', age: 33 },
    { name: 'Alexander Petrov', age: 24 },
    { name: 'Dmitry Sidorov', age: 18 },
];

const dimychTransformator = (man: ManType) => ({ //конструируем объект
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
})

const devs = [
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov',
    },
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov',
    },
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov',
    },
];


const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
];
const dev3 = people.map(dimychTransformator );

const de4 = people.map( man=> ({ //конструируем объект
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
})
)

const messages = people.map(man => `Hello ${man.name.split(" ")[0]} !`);

export const createGreetingMessages = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}!`);
}