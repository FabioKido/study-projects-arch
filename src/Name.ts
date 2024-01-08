/**
 * Value Object
 * Domain
 */

export default class Name {
    constructor(readonly name: string) {}

    static validate(): string {
        if(this.name.length < 2) throw new Error('Nome deve conter mais que duas letras')
        
        return this.name
    }
}