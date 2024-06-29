import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';

let student: StudentType;
beforeEach( ()=> {
    student = {
        id: 1,
        'name' : 'Katya',
        age: 26,
        isActive: false,
        address: {
            streetTitle: 'Surganova2',
            city: {
                title: 'Minsk',
                country: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'html'
            },
            {
                id: 2,
                title: 'css'
            },
            {
                id: 3,
                title: 'react'
            }
        ]
    }
})



test('new tech skill should be added', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})


test('student should be made active', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test('student lives in city', () => {
   let result1 =  doesStudentLiveIn(student, 'Moscow');
   let result2 =  doesStudentLiveIn(student, 'Minsk');

   expect(result1).toBe(false);
   expect(result2).toBe(true);
})