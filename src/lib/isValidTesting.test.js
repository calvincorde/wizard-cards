import {
    isValidProductName,
    isValidPrice,
    isValidEmail
} from './isValid'

describe('Product name is valid', () => {
    it('should test that the name has at least 2 characters', () => {
        const result = isValidProductName('ABC');
        expect(result).toBeTruthy();
    })
})

describe('Product Price is valid', () => {
    it('price should only has 2 decimal letters', () => {
        const result = isValidPrice('>= 2');
        expect(result).toBeTruthy();
    })
})

describe('Product email is valid', () => {
    it('email should contain @', () => {
        const result = isValidEmail('@');
        expect(result).toBeTruthy;
    })
})
