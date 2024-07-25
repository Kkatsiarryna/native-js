import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test("Reference type test", () => {
    let user: UserType = {
        name: "Katya",
        hair: 26,
        address: { city: "Minsk" },
    };

   const awesomeUser =  makeHairStyle(user, 2);
   // user = awesomeUser;
   //  expect(awesomeUser.hair).toBe(13);
   //  expect(user.hair).toBe(13);

    expect(awesomeUser.hair).toBe(13);
    expect(user.hair).toBe(26);
    expect(awesomeUser.address).toBe(user.address)
});


test('change addres', () => {
    let user: UserWithLaptopType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        }
    };

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev');
})


test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        }
    };

    const upgradeUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradeUser);
    expect(user.laptop).not.toBe(upgradeUser.laptop);
    expect(upgradeUser.laptop.title).toBe('Macbook')
})

test('upgrade user with book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        },
        books: ['css', 'html', 'js', 'react']
    };

    const upgradeUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(upgradeUser);
    expect(user.books).toBe(upgradeUser.books);
    expect(user.laptop).toBe(upgradeUser.laptop);
    expect(user.address).not.toBe(upgradeUser.address);
    expect(upgradeUser.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        },
        books: ['css', 'html', 'js', 'react']
    };

    const upgradeUser = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(upgradeUser);
    expect(user.address).toBe(upgradeUser.address);
    expect(user.laptop).toBe(upgradeUser.laptop);
    expect(user.books).not.toBe(upgradeUser.books);
    expect(upgradeUser.books[4]).toBe('ts');
    expect(upgradeUser.books[5]).toBe('rest api');
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        },
        books: ['css', 'html', 'js', 'react']
    };

    const upgradeUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(upgradeUser);
    expect(user.address).toBe(upgradeUser.address);
    expect(user.laptop).toBe(upgradeUser.laptop);
    expect(user.books).not.toBe(upgradeUser.books);
    expect(upgradeUser.books[2]).toBe('ts');
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        },
        books: ['css', 'html', 'js', 'react']
    };

    const upgradeUser = removeBook(user, 'js')

    expect(user).not.toBe(upgradeUser);
    expect(user.address).toBe(upgradeUser.address);
    expect(user.laptop).toBe(upgradeUser.laptop);
    expect(user.books).not.toBe(upgradeUser.books);
    expect(upgradeUser.books[2]).toBe('react');
})

test('add companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]
    };

    const  upgradeUser = addCompany(user, 3, 'Lesta Games')

    expect(user).not.toBe(upgradeUser);
    expect(upgradeUser.companies.length).toBe(3);
    expect(upgradeUser.companies[2].title).toBe('Lesta Games');
})


test('update companies array', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Katya",
        hair: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook",
        },
        companies: [
            {id: 1, title: 'Epame'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]
    };

    const  upgradeUser = updateCompanyTitle(user, 1, 'EPAM')

    expect(user).not.toBe(upgradeUser);
    expect(user.address).toBe(upgradeUser.address);
    expect(user.laptop).toBe(upgradeUser.laptop);
    expect(user.companies).not.toBe(upgradeUser.companies);
    expect(upgradeUser.companies[0].title).toBe('EPAM');
})

test('update companies object', () => {
    let companies = {
        'Katya' : [
            {id: 1, title: 'Epame'},
            {id: 2, title: 'IT-INCUBATOR'},
        ],
        'Sofa' : [
            {id: 1, title: 'IT-INCUBATOR'}
        ]
    }

    const copy = updateCompanyTitle2(companies, 'Katya',1, 'EPAM' );

    expect(copy['Katya']).not.toBe(companies['Katya'])
    expect(copy['Sofa']).toBe(companies['Sofa'])
    expect(copy['Katya'][0].title).toBe('EPAM');
    expect(companies['Katya'][0].title).toBe('Epame');
})


