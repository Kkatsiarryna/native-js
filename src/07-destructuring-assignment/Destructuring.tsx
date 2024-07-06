import React, {useState} from "react";


type StreetType = {
    title: string
}
type AddressType = {
    street: StreetType
}
type LessonsArray = {
    title: string
    name: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonsArray[]
    address: AddressType
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}


function useKatyaState(m: string) {
    return [m, function (){}]
}
function useKatyaState2(m: string) {
    return {message: m, setMessage: function (){}
    }
}


const ManComponent: React.FC<PropsType> = (props) => {
    // const {title} = props;
    // const {name, age} = props.man;

    // const {title, man: {name}} = props;

    //const {title, man} = props;

    const {title,man, ...restProps} = props;

    const [message, setMessage] = useKatyaState('Hello');



    return(
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}