
type UserType = {
    name: string
    age: number
    address: {title: string}
}

function icreaseAge(u: UserType) {
    u.age++;
}

test('reference type test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    icreaseAge(user);
    expect(user.age).toBe(33);
    const superman = user
    superman.age = 1000
    expect(superman.age).toBe(1000);
})


test('array test', () => {
    let users = [
        {
        name: 'Dimych',
        age: 32
        },
        {
            name: 'Katya',
            age: 26
        },
    ]
        let admins = users
        admins.push({name: 'Sofa', age: 10})
    expect(users[2]).toEqual({name: 'Sofa', age: 10})
})

test('value type test', () => {
  let usersCount = 100;
  let adminsCount = usersCount;
    adminsCount = adminsCount + 1;
})

test('type test', () => {
    const address = {
        title: "Minsk"
    }
    let user = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let user2 = {
        name: 'Natasha',
        age: 32,
        address: address
    }

    address.title = 'Kanary';
    expect(user.address.title).toBe('Kanary');
    expect(user.address).toBe(user2.address);
})

test('reference type array test', () => {
    const address = {
        title: "Minsk"
    }
    let user = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let user2 = {
        name: 'Natasha',
        age: 32,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]

    users[0].name = "Misha"
    expect(users[0].name).toBe("Misha");

    const admins = [user, user2]

    admins[1].name = "Valera"

    expect(users[1].name).toBe("Valera");
    expect(user2.name).toBe("Valera");
})

test ('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort()
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})