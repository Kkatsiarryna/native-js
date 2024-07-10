// var user = {
//     name: 'Dimych',
//     age: 12,
//     address: {
//         city: {
//             title: 'Minsk'
//         }
//     }
// }
//
// user['address']['city']['title']
// user.address.city.title
//
// let city = {}
// city.title = "Minsk"
// city["citizensCount"] = 100
// console.log(city) //{ title: 'Minsk', citizensCount: 100 }
//
// let users = ["katya", 'lena', 'sofia'];
// console.log(users['0'])//katya (работает только в js)
//
// let users2 = users['map']( el => el.toUpperCase());
// console.log(users2)//[ 'KATYA', 'LENA', 'SOFIA' ]

////////////
// let usersObj = {
//     '0': 'Dimych',
//     '1': 'Natasha',
//     '2': 'Valera',
//     '3': 'Katya'
// }
// console.log(usersObj['0']) //Dimych
// console.log(usersObj[1]) //Natasha
//
// usersObj['0'] = 'Super Dimych'
// console.log(usersObj) //{ '0': 'Super Dimych', '1': 'Natasha', '2': 'Valera', '3': 'Katya' }


let users = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

//console.log(Object.keys(users)) //[ '0', '1', '2', '3' ]
//console.log(Object.values(users)) //[ 'Dimych', 'Natasha', 'Valera', 'Katya' ]

let usersValues = Object.keys(users).map( (el) => users[el]); // сначала надо преобразовать в массив
//console.log(usersValues) //[ 'Dimych', 'Natasha', 'Valera', 'Katya' ]

users[null] = 'ok'
//console.log(users) //{'0': 'Dimych','1': 'Natasha', '2': 'Valera','3': 'Katya', null: 'ok' }

users [ {} ] = 'hello' //{}.toString
console.log(users) //{ '0': 'Dimych', '1': 'Natasha', '2': 'Valera', '3': 'Katya', null: 'ok', '[object Object]': 'hello'}

users[ {name: 'Dimych'} ];
console.log(users) //{'0': 'Dimych', '1': 'Natasha', '2': 'Valera', '3': 'Katya', null: 'ok', '[object Object]': 'hello' }

users[ {name: 'Natasha', toString(){return 'blabla'} } ] = 'value of blabla';
console.log(users)// {'0': 'Dimych', '1': 'Natasha', '2': 'Valera', '3': 'Katya', null: 'ok', '[object Object]': 'hello', blabla: 'value of blabla'
}


