/**
 * Itegration Test
 * Arrange - Act - Assert
 */

import CreateUser from "../src/CreateUser"
import GetUser from "../src/GetUser"
import UserRepositoryMemory from "../src/UserRepositoryMemory"

test('Deve criar um usuário', async function() {
    const userRepository = new UserRepositoryMemory()
    const createUser = new CreateUser(userRepository)
    const getUser = new GetUser(userRepository)

    const input = {
        userId: `${Math.random() * 1000}`,
        name: 'Fábio',
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