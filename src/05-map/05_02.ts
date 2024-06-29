import {GovernmentBuildingsType, HousesType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovernmentBuildingsType>) => {
    return governmentBuildings.map( b => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(house => house.address.street.title);

}

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map( house => `Hello guys from ${house.address.street.title}!`);
}