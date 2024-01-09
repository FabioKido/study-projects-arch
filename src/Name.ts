/**
 * Value Object
 * Domain
 */

export default class Name {
    readonly value: string

    constructor(name: string) {
        if(name.length < 2) throw new Error('Nome deve conter mais que duas letras')
        this.value = name
    }
}