import ReactDOM from "react-dom/client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Assignment1 from './Module1/assignment1'
import Assignment2 from './Module1/assignment2'
import Assignment3 from './Module1/assignment3'
import Assignment4 from './Module1/assignment4'
import Assignment5 from './Module1/assignment5'
import Assignment6 from './Module1/assignment6'
import Assignment7 from './Module1/assignment7'
import Assignment8 from './Module1/assignment8'
import Assignment9 from './Module1/assignment9'
import Assignment10 from './Module1/assignment10'

const App = () => {
  return (
    <>
      <p>Prompt is not supported for modern React Routers so I used Input instead.</p>
      <Router >
        <div class="nav__bar">
          <ul>
            <li><Link to="Assignment1" >Assignment 1</Link></li>
            <li><Link to="Assignment2" >Assignment 2</Link></li>
            <li><Link to="Assignment3" >Assignment 3</Link></li>
            <li><Link to="Assignment4" >Assignment 4</Link></li>
            <li><Link to="Assignment5" >Assignment 5</Link></li>
            <li><Link to="Assignment6" >Assignment 6</Link></li>
            <li><Link to="Assignment7" >Assignment 7</Link></li>
            <li><Link to="Assignment8" >Assignment 8</Link></li>
            <li><Link to="Assignment9" >Assignment 9</Link></li>
            <li><Link to="Assignment10" >Assignment10</Link></li>
          </ul>
        </div>

        <div>

          <Routes>
            <Route path="Assignment1" element={<Assignment1 />} />
            <Route path="Assignment2" element={<Assignment2 />} />
            <Route path="Assignment3" element={<Assignment3 />} />
            <Route path="Assignment4" element={<Assignment4 />} />
            <Route path="Assignment5" element={<Assignment5 />} />
            <Route path="Assignment6" element={<Assignment6 />} />
            <Route path="Assignment7" element={<Assignment7 />} />
            <Route path="Assignment8" element={<Assignment8 />} />
            <Route path="Assignment9" element={<Assignment9 />} />
            <Route path="Assignment10" element={<Assignment10 />} />
          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App;