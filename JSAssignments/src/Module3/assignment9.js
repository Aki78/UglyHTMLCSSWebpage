import { useState } from "react";

const M2Assignment9 = () => {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const evenNumbers = numbers.filter(e => e % 2 == 0)

    return (
        <>
            <div>Assignment 9 </div>
            <div>{numbers}</div>
            <div>{evenNumbers}</div>
            
        </>

    )
}

export default M2Assignment9;


