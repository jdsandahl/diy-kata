const reachDestination = (distance, speed) => {
    const eTA = distance / speed; 
    return `I should be there in ${Math.ceil(eTA*2)/2} hours`;
};
    
module.exports = reachDestination;
