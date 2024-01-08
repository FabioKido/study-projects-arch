/**
 * Repository
 * Domain/Application
 */

import User from "./User";
import UserRepository from "./UserRepository";

export default class UserRepositoryMemory implements UserRepository {
    
    users: User[]

    constructor() {
        this.users = [] 
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }

    async get(userId: string): Promise<User> {
        const userData = this.users.find(user => user.userId === userId)!
        return new User(userData.userId, userData.name, userData.age, userData.job)
    }
    
}