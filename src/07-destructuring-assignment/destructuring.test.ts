import exp from "node:constants";
import {ManType} from "./Destructuring";

let props:  ManType;

beforeEach( ()=> {
    props = {
        name: 'Katya',
        age: 32,
        lessons: [{title: '1', name:'html'}, {title: '2', name: 'css'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test( "", ()=> {
    //const {age, lessons, address: {street: {title}}} = props; //поищу свойства в пропс
    const {age, lessons} = props;
    //const title = props.address.street.title;
    const {title} = props.address.street;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Nezavisimosti street');
})


test('array destructuring', ()=> {

    // const [ls1, ls2] =props.lessons;
    // expect(ls1.title).toBe('1');
    // expect(ls2.title).toBe('2');

    // const [, ls2] =props.lessons;
    // expect(ls2.title).toBe('2');

    // const [,,ls3] =props.lessons;
    // expect(ls3.title).toBe('3');

    // const [ls1, ...restLessons] =props.lessons;
    // expect(ls1.title).toBe('1');
    // expect(restLessons.length).toBe(2);
    // expect(restLessons[0].title).toBe('2');

    // const [,ls2, ...restLessons] =props.lessons;
    // expect(ls2.title).toBe('2');
    // expect(restLessons.length).toBe(1);

    const [,ls2, ...restLessons] =props.lessons;
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'});

})

