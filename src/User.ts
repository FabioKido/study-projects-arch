/**
 * Domain - Entity
 */

export default class User {
    
    constructor(readonly userId: string, readonly name: string, readonly age: number, readonly job: string) {}

    static create(name: string, age: number, job: string): User {
        const userId = `${Math.random() * 1000}`
        return new User(userId, name, age, job)
    }

}