import { useEffect } from "react"
import './t1/1.css'
import {Helmet} from "react-helmet"
const M3Assignment1 = () => {
    // var jsContent = require('./t1/1.js')

    useEffect ( () => {
        const ul = document.querySelector('#target')

        let lists =  "<li> First Item </li>\n<li> Second Item </li>\n<li> Third Item </li>"

        ul.innerHTML = lists;
        ul.classList.add("my-list")
     }, [])

    return (
        <>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Task 1</title>
            </Helmet>
            <div>Module 3 Assignment 1 </div>

            <h1>Task 1</h1>
            <ul id="target"></ul>
        </>

    )
}

export default M3Assignment1;


