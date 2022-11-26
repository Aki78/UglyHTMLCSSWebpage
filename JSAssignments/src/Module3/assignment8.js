import { useState } from "react";

const M2Assignment8 = () => {
    const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    const myConcat = (stem,e) => {
        return stem + e
    }
console.log(houses.reduce(myConcat))
    return (
        <>
            <div>Assignment 8 </div>
            <div>{houses.reduce(myConcat)}</div>
            
        </>

    )
}

export default M2Assignment8;


