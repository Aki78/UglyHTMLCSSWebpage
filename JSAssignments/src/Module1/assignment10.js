import { useEffect, useState } from "react";

const Assignment7 = () => {
    const [rolls, setRolls] = useState("");
    const [dices, setDices] = useState("");


    const handleRoll = () => {
        let randomDices = Array.from({ length: rolls }, () => Array.from({ length: parseInt(dices) }, () => Math.floor(Math.random() * parseInt(6))))
            ;

        console.log(randomDices)

        return (
            randomDices.map((d) =>
                <div>{d.reduce((p, a) => p + a, 0)}</div>
            )
         )
            

}

return (
    <>
        <div>Assignment7 </div>
        <input type="text" value={rolls} onChange={(e) => setRolls(e.target.value)} />
        <input type="text" value={dices} onChange={(e) => setDices(e.target.value)} />
        {handleRoll()}
    </>
)




}

export default Assignment7;


