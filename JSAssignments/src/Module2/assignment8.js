import { useEffect, useState } from "react";
import isLeapYear from "leap-year";

const N2Assignment8 = () => {
    const [year1, setYear1] = useState("0");
    const [year2, setYear2] = useState("1");


    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const handleYears = () => {
        let y1 = parseInt(year1)
        let y2 = parseInt(year2)
        let l = y2 - y1
        let years = [0, 1]
        if (y2 > y1) years = range(y1, y2)
        let leapYears = years.filter((v) => isLeapYear(v))
        console.log(leapYears)

        return (
            leapYears.map((d) =>
                <li>{d}</li>
            )
        )


    }

    return (
        <>
            <div>Assignment8 </div>
            <input type="text" value={year1} onChange={(e) => setYear1(e.target.value)} />
            <input type="text" value={year2} onChange={(e) => setYear2(e.target.value)} />
            <ul>
                {handleYears()}
            </ul>
        </>
    )




}

export default N2Assignment8;


