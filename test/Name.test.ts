/**
 * Unit Test
 * Arrange - Act - Assert
 */

import Name from '../src/Name'

test('Deve criar um nome corretamente', function(){ 
    const n = 'Kido'
    const name = new Name(n)
    expect(name.value).toBe('Kido')
})
