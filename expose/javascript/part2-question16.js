//Question 16
let statisitcs = {
    redCars: 21, 
    blueCars: 45,
    greenCars: 12,
    raceCars:5,
    blackCars: 40,
    rareCars:2
};
for(const carType in statisitcs){
    if( statisitcs[carType]%2 == 1 || carType.startsWith('r')){
        console.log(`statistics.${carType} = ${statisitcs[carType]}` );
    }
}