// Code your solution in this file!
let hq = 42;
function distanceFromHqInBlocks(someValue){
    if (someValue >= hq){
        return someValue - hq
    }
    else {
        return hq - someValue
    }
}

function distanceFromHqInFeet(someValue){
    let distanceFt = distanceFromHqInBlocks(someValue)*264
    return distanceFt;
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return (start-destination)*264
    }
    else {
        return (destination-start)*264
    }
}

function calculatesFarePrice(start, destination){
    let x = distanceTravelledInFeet(start, destination);
    if(x <= 400 ){
        return 0;
    }
    else if (x > 400 && x <= 2000){
        return (x- 400)*0.02
    }
    else if (x>2000 && x <=2500){
        return 25;
    }
    else {
        return `cannot travel that far`
    }
}
