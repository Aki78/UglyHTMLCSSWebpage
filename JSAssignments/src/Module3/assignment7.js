import {useEffect} from "react"
import {Helmet} from "react-helmet"
const M3Assignment7 = () => {
    useEffect ( () => {
        const myImg = document.getElementById("target");
        const hover = document.getElementById("trigger");

        hover.addEventListener('mouseenter', () => myImg.src = process.env.PUBLIC_URL +  '/img/picB.jpg');
        hover.addEventListener('mouseleave', () => {myImg.src = process.env.PUBLIC_URL +  '/img/picA.jpg'});
     }, [])

    return (
        <>
            <Helmet>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Task 7</title>
            </Helmet>

            <div>Module 3 Assignment 7 </div>
    <h1>Task 7</h1>
    <img id="target" src= { process.env.PUBLIC_URL + "/img/picA.jpg"} alt="example"/>
    <p id="trigger">Hover over me</p>

        </>

    )
}

export default M3Assignment7;