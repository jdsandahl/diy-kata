const numberToReversedDigits = number => {
    //return Array.from(String(number),Number).reverse(); 
    return number.toString().split('').map(Number).reverse();
}    

module.exports = numberToReversedDigits;
