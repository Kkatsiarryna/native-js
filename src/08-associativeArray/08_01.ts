
type UsersType2 = {
    [key: string]: { id: number; name: string }
}

let users2: UsersType2 = { //ассоциативный массив
    '101': {id: 101, name: 'Dimych'},
    '3154545': {id: 3154545, name: 'Natasha'},
    '1121': {id: 1121, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
//users[1] //достать элемент
let user = {id: 100500, name: 'Igor'};
users2[user.id] = user; //добавить пользователя
delete users2[user.id]; // удалить пользователя
users2[user.id].name = 'Vitya'; //обновить пользователя

 const usersArray = [ //обычный массив
    {id: 101, name: 'Dimych'},
    {id: 3154545, name: 'Natasha'},
    {id: 1121, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//usersArray.find(u=> u.id === 1);
usersArray.push(user);

let usersCopy = [...usersArray.filter(user => user.id === user.id), user];
let usersArray2 = usersArray.filter(u => u.id !== user.id);