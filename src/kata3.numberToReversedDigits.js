const numberToReversedDigits = number => {
    //const array = number.toString().split('') //.map(Number).reverse();
    
    //const array = [];
    //const reverseNumber = 
    return Array.from(String(number),Number).reverse(); 
    //return reverseNumber;
};

module.exports = numberToReversedDigits;
