import {student, StudentType} from '../02/02';
import {CityType, GovernmentBuildingsType, HousesType} from '../02/02_02';

debugger

export const sum = (a: number, b: number) => { // стрелочная функция, для callback
    return a + b;
}

export function sum2(a: number, b: number) { // function declaration. использ для компонентов
    return a + b;
}



const res = sum( sum(1,2), sum(1,3));


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2 (st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = ( st: StudentType ) => {
    st.isActive = true;
}

export const doesStudentLiveIn = (st: StudentType, cityLive: string) => {
    return st.address.city.title === cityLive;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, sum: number) => {
    building.budget += sum;
}

export const repairHouse = (house: HousesType) => {
     house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, count: number) => {
    building.staffCount -= count;
}

export const toHireStaff = (building: GovernmentBuildingsType, number: number) => {
    building.staffCount += number;
}

export const createMessage = (city: CityType) => {
    //return 'Hello ' + city.title + ' citizens. I want you be happy. All ' + city.citizensNumber;
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber}`;
}