import { useState } from "react";

const M3Assignment10 = () => {
    const [studnetName, setStudentName] = useState("");
    const [house, setHouse] = useState("");

    const decideHouse = (e) => {
        if (e.key === 'Enter') {
            const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
            setHouse(houses[Math.floor(Math.random() * 4)]);
        }
    }
    return (
        <>
            <div>Assignment 10 </div>
            <div>Press Enter after Name input</div>
            <input type="text"
                value={studnetName}
                onChange={(e) => setStudentName(e.target.value)}
                onKeyDown={(e) => decideHouse(e)}
            />
             <div> {studnetName}, you are {house}</div> 
            
        </>

    )
}

export default M3Assignment10;

