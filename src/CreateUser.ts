/**
 * UseCase
 */

import Name from "./Name"
import UserRepository from "./UserRepository"

export default class CreateUser {

    constructor(readonly userRepository: UserRepository) {}

    async execute(input: Input) {
        this.userRepository.save(input)
    }
}

type Input = {
    userId: string,
    name: Name,
    age: number,
    job: string
}