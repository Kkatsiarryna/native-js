
type UsersType= {
    [key: string]: { id: number; name: string }
}

let users3: UsersType

beforeEach( () => {
    users3 = {
        '101': {id: 101, name: 'Dimych'},
        '132315': {id: 3154545, name: 'Natasha'},
        '1212': {id: 1121, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user from obj', () =>{
    users3['1'].name = 'Ekaterina'
    expect(users3['1'].name).toBe('Ekaterina');
    expect(users3['1']).toEqual({id: 1, name: 'Ekaterina'})
})

test('should delete corresponding user from obj', () =>{
    delete  users3['1']
    expect(users3['1']).toBeUndefined()
})