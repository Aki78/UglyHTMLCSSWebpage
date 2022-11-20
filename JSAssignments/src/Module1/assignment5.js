import { useState } from "react";
import isLeapYear from "leap-year";
const Assignment5 = () => {
    const [year, setYear] = useState("");
    console.log("is leapyear", toString(isLeapYear(2000)))

    return (
        <>
            <div>Assignment 5 </div>
            <input type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
             <div> is leap year: {isLeapYear(parseInt(year)).toString()}</div> 
            
        </>

    )
}

export default Assignment5;


