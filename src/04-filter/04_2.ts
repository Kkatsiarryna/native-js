import {CityType, GovernmentBuildingsType, HousesType} from '../02/02_02';

export function demolishHousesOnTheStreet(city: CityType, street: string) {
     city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getHousesOnTheStreet(houses: Array<HousesType>, happyStreet: string) {

}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingsType>, count: number) {
    /*    return buildings.governmentBuildings = buildings.governmentBuildings.filter(building => {
           return building.staffCount > count;
        })*/
    return buildings.filter(building => building.staffCount > count)
}

