/**
 * UseCase
 */

import UserRepository from "./UserRepository"

export default class GetUser {

    constructor(readonly userRepository: UserRepository) {}

    async execute(userId: string): Promise<Output> {
        return this.userRepository.get(userId)
    }
}

type Output = {
    userId: string,
    name: string,
    age: number,
    job: string
}