export const isValidProductName = (name) => name.length >= 2;

export const isValidEmail = (email) => email.includes('@');

export const isValidPrice = (price) => {
    if (price.includes(',')) {
        const [_, decimals] = price.split(',');
        if (decimals.length <= 2) {
            return true;
        } else {
            return false;
        }
    } else if (!price.includes('.')) {
        return true;
    } else {
        return false;
    }
};

const isValidProduct = (product) =>
    isValidProductName(product.name) &&
    isValidEmail(product.support) &&
    isValidPrice(product.price);

export default isValidProduct

