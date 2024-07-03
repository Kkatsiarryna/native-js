import React, {ChangeEvent, MouseEvent} from "react";


const callback = () => {
    return 12;
};

window.setTimeout( callback,1000);

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement> ) => {
        //debugger
        console.log(event.currentTarget.name);
       // alert("user should be deleted")
    }
    const saveUser = () => {
        alert("user have been saved")
    }
    const onNameChanged = () =>{
        console.log("name changed")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) =>{
        console.log("age changed " + event.currentTarget.value) //(эл-т с которым произошло событие) получить актуальное значение этого эл-та
    }
    const focusLostHandler= () =>{
        console.log("focus lost")
    }
    const search = (event: MouseEvent<HTMLButtonElement>) => {
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            >Dimych</textarea>
            <input
                onChange={onAgeChanged}
                type="number"
            />
            <button name="search" tabIndex={1} onClick={search}> delete</button>

            <button name="DeLeTe-1" tabIndex={2} onClick={deleteUser}> delete</button>
            <button name="DeLeTe-2" tabIndex={3} onClick={deleteUser}> delete2</button>
            <div onClick={saveUser}>save</div>
        </div>
    )
}