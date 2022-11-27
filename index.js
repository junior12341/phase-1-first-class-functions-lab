const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    const newArray = []
    let l1 = `${drivers[0]}`
    let l2 = `${drivers[1]}`
    newArray.push(l1)
    newArray.push(l2)
    return newArray
}

const returnLastTwoDrivers = (drivers) => {
    const newArray = []
    let l1 = `${drivers[2]}`
    let l2 = `${drivers[3]}`
    newArray.push(l1)
    newArray.push(l2)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(cost) {
        return fareMultiplier * cost;
      }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, drive) {
    return drive(drivers);
  }
