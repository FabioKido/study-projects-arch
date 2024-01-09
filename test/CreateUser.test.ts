/**
 * Itegration Test
 * Arrange - Act - Assert
 */

import Name from "../src/Name"
import CreateUser from "../src/CreateUser"
import GetUser from "../src/GetUser"
import UserRepositoryMemory from "../src/UserRepositoryMemory"

let createUser: CreateUser
let getUser: GetUser

beforeEach(function(){
    const userRepository = new UserRepositoryMemory()
    createUser = new CreateUser(userRepository)
    getUser = new GetUser(userRepository)
})

test('Deve criar um usuário', async function() {
    const input = {
        userId: `${Math.random() * 1000}`,
        name: new Name('Fábio'),
        age: 29,
        job: 'dev'
    }

    createUser.execute(input)
    const user = await getUser.execute(input.userId)

    expect(user.userId).toBe(input.userId)
    expect(user.name).toBe(input.name)
    expect(user.age).toBe(input.age)
    expect(user.job).toBe(input.job)
})