/**
 * Domain - Entity
 */

import Name from "./Name"

export default class User {
    
    constructor(readonly userId: string, readonly name: Name, readonly age: number, readonly job: string) {}

    static create(name: Name, age: number, job: string): User {
        const userId = `${Math.random() * 1000}`
        return new User(userId, name, age, job)
    }

}