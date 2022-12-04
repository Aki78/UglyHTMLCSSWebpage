import { useEffect } from "react"
import './t2/2.css'
import {Helmet} from "react-helmet"
const M3Assignment2 = () => {

    useEffect ( () => {
        const ul = document.querySelector("#target")

        const list1 = document.createElement("li")
        const list2 = document.createElement("li");
        const list3 = document.createElement("li");
        list1.innerText = "First item";
        list2.innerText = "Second item";
        list3.innerText = "Third item";
        ul.appendChild(list1);
        ul.appendChild(list2);
        ul.appendChild(list3);

        ul.classList.add("my-item");
     }, [])

    return (
        <>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Task 2</title>
            </Helmet>
            <div>Module 3 Assignment 2 </div>

            <h1>Task 2</h1>
            <ul id="target"></ul>
        </>

    )
}

export default M3Assignment2;

