export type UserType = {
    name: string;
    hair: number;
    address: { city: string, house?: number };
};
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = {
    id: number
    title: string
};
export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}


export function makeHairStyle(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    //userCopy.hair= userCopy.hair / power
    return userCopy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: { ...u.address, city: city },
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: { ...u.address, house: house },
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: { ...u.laptop, title: laptop },
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...newBooks]
    }

}

// export function updateBook (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
//     return {
//         ...u,
//         books: u.books.map( el => el === oldBook ? el = newBook : el)
//     }
// }
export const updateBook =  (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string)  => ( {
        ...u,
        books: u.books.map( el => el === oldBook ? el = newBook : el)
    }
)

export const removeBook =  (u: UserWithLaptopType & UserWithBooksType, deletedBook: string)  => ( {
        ...u,
        books: u.books.filter(el => el !== deletedBook)
    }
)

export const addCompany =  (u: UserWithLaptopType & WithCompaniesType, id: number, title: string)  => ( {
        ...u,
        companies: [...u.companies, { id, title }]
    }
)

export const updateCompanyTitle =  (u: UserWithLaptopType & WithCompaniesType, id: number, title: string)  => ( {
        ...u,
        companies: u.companies.map( el => el.id === id ? {...el, title } : el)
    }
)

export const updateCompanyTitle2 =  (companies: { [key: string]: Array<CompanyType>},
                                     userName: string,
                                     companyId: number,
                                     newTitle: string)  =>  {
        // let companyCopy = {...companies};
        // companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        //     ? {...c, title: newTitle}
        //     : c
        // )

        //return companyCopy

        return {
            ...companies,
            [userName]: companies[userName].map(c => c.id === companyId
            ? {...c, title: newTitle}
            : c
            )
        }
    }
