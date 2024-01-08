/**
 * Repository
 * Domain/Application
 */

import User from "./User";

export default interface UserRepository {
    save(user: User): Promise<void>
    get(userId: string): Promise<User>
}