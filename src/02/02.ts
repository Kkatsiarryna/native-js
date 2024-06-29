
type LocalCityType ={
    title : string
    country : string
}


type AddressType ={
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}



export const student: StudentType = {
     id: 1,
    'name' : 'Katya',
    age: 26,
    isActive: true,
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

console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);

