import { useEffect } from "react"
import './t2/2.css'
import {Helmet} from "react-helmet"
const M3Assignment4 = () => {
    const names = [
        {name:'John',
         value:'2345768'},
        {name:'Paul',
         value:'2134657'},
        {name:'Jones',
         value:'5423679'},
    ];

    useEffect ( () => {
        const elem = document.querySelector("#target");
        names.map(e => {
                let innerElem = document.createElement("option")
                innerElem.value = e.value
                innerElem.innerText = e.name
                elem.appendChild(innerElem)
            })
        
     }, [])

    return (
        <>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Task 4</title>
            </Helmet>
            <div>Module 3 Assignment 4 </div>

            <h1>Task 4</h1>
            <select id="target"></select>
        </>

    )
}

export default M3Assignment4;