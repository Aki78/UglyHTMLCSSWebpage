import ReactDOM from "react-dom/client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import M1Assignment1 from './Module1/assignment1'
import M1Assignment2 from './Module1/assignment2'
import M1Assignment3 from './Module1/assignment3'
import M1Assignment4 from './Module1/assignment4'
import M1Assignment5 from './Module1/assignment5'
import M1Assignment6 from './Module1/assignment6'
import M1Assignment7 from './Module1/assignment7'
import M1Assignment8 from './Module1/assignment8'
import M1Assignment9 from './Module1/assignment9'
import M1Assignment10 from './Module1/assignment10'

import M2Assignment1 from './Module2/assignment1'
import M2Assignment2 from './Module2/assignment2'
import M2Assignment3 from './Module2/assignment3'
import M2Assignment4 from './Module2/assignment4'
import M2Assignment5 from './Module2/assignment5'
import M2Assignment6 from './Module2/assignment6'
import M2Assignment7 from './Module2/assignment7'
import M2Assignment8 from './Module2/assignment8'
import M2Assignment9 from './Module2/assignment9'
import M2Assignment10 from './Module2/assignment10'


import M3Assignment1 from './Module3/assignment1'
import M3Assignment2 from './Module3/assignment2'
import M3Assignment3 from './Module3/assignment3'
import M3Assignment4 from './Module3/assignment4'
import M3Assignment5 from './Module3/assignment5'
import M3Assignment6 from './Module3/assignment6'
import M3Assignment7 from './Module3/assignment7'
import M3Assignment8 from './Module3/assignment8'
import M3Assignment9 from './Module3/assignment9'
import M3Assignment10 from './Module3/assignment10'

const App = () => {
  return (
    <>
      <p>Prompt is not supported for modern React Routers so I used Input instead.</p>
      <Router >
        <div class="nav__bar">
          <div class="left">
            <h3>Module 1</h3>
            <ul>
              <li><Link to="M1Assignment1" >Assignment 1</Link></li>
              <li><Link to="M1Assignment2" >Assignment 2</Link></li>
              <li><Link to="M1Assignment3" >Assignment 3</Link></li>
              <li><Link to="M1Assignment4" >Assignment 4</Link></li>
              <li><Link to="M1Assignment5" >Assignment 5</Link></li>
              <li><Link to="M1Assignment6" >Assignment 6</Link></li>
              <li><Link to="M1Assignment7" >Assignment 7</Link></li>
              <li><Link to="M1Assignment8" >Assignment 8</Link></li>
              <li><Link to="M1Assignment9" >Assignment 9</Link></li>
              <li><Link to="M1Assignment10" >Assignment10</Link></li>
            </ul>
            <h3>Module 2</h3>
            <ul>
              <li><Link to="M2Assignment1" >Assignment 1</Link></li>
              <li><Link to="M2Assignment2" >Assignment 2</Link></li>
              <li><Link to="M2Assignment3" >Assignment 3</Link></li>
              <li><Link to="M2Assignment4" >Assignment 4</Link></li>
              <li><Link to="M2Assignment5" >Assignment 5</Link></li>
              <li><Link to="M2Assignment6" >Assignment 6</Link></li>
              <li><Link to="M2Assignment7" >Assignment 7</Link></li>
              <li><Link to="M2Assignment8" >Assignment 8</Link></li>
              <li><Link to="M2Assignment9" >Assignment 9</Link></li>
              <li><Link to="M2Assignment10" >Assignment10</Link></li>
            </ul>
            <h3>Module 3</h3>
            <ul>
              <li><Link to="M3Assignment1" >Assignment 1</Link></li>
              <li><Link to="M3Assignment2" >Assignment 2</Link></li>
              <li><Link to="M3Assignment3" >Assignment 3</Link></li>
              <li><Link to="M3Assignment4" >Assignment 4</Link></li>
              <li><Link to="M3Assignment5" >Assignment 5</Link></li>
              <li><Link to="M3Assignment6" >Assignment 6</Link></li>
              <li><Link to="M3Assignment7" >Assignment 7</Link></li>
              <li><Link to="M3Assignment8" >Assignment 8</Link></li>
              <li><Link to="M3Assignment9" >Assignment 9</Link></li>
              <li><Link to="M3Assignment10" >Assignment10</Link></li>
            </ul>
          </div>
        </div>

        <div class="right">

          <Routes>
            <Route path="M1Assignment1" element={<M1Assignment1 />} />
            <Route path="M1Assignment2" element={<M1Assignment2 />} />
            <Route path="M1Assignment3" element={<M1Assignment3 />} />
            <Route path="M1Assignment4" element={<M1Assignment4 />} />
            <Route path="M1Assignment5" element={<M1Assignment5 />} />
            <Route path="M1Assignment6" element={<M1Assignment6 />} />
            <Route path="M1Assignment7" element={<M1Assignment7 />} />
            <Route path="M1Assignment8" element={<M1Assignment8 />} />
            <Route path="M1Assignment9" element={<M1Assignment9 />} />
            <Route path="M1Assignment10" element={<M1Assignment10 />} />
          </Routes>
          <Routes>
            <Route path="M2Assignment1" element={<M2Assignment1 />} />
            <Route path="M2Assignment2" element={<M2Assignment2 />} />
            <Route path="M2Assignment3" element={<M2Assignment3 />} />
            <Route path="M2Assignment4" element={<M2Assignment4 />} />
            <Route path="M2Assignment5" element={<M2Assignment5 />} />
            <Route path="M2Assignment6" element={<M2Assignment6 />} />
            <Route path="M2Assignment7" element={<M2Assignment7 />} />
            <Route path="M2Assignment8" element={<M2Assignment8 />} />
            <Route path="M2Assignment9" element={<M2Assignment9 />} />
            <Route path="M2Assignment10" element={<M2Assignment10 />} />
          </Routes>
          <Routes>
            <Route path="M3Assignment1" element={<M2Assignment1 />} />
            <Route path="M3Assignment2" element={<M2Assignment2 />} />
            <Route path="M3Assignment3" element={<M2Assignment3 />} />
            <Route path="M3Assignment4" element={<M2Assignment4 />} />
            <Route path="M3Assignment5" element={<M2Assignment5 />} />
            <Route path="M3Assignment6" element={<M2Assignment6 />} />
            <Route path="M3Assignment7" element={<M2Assignment7 />} />
            <Route path="M3Assignment8" element={<M2Assignment8 />} />
            <Route path="M3Assignment9" element={<M2Assignment9 />} />
            <Route path="M3Assignment10" element={<M2Assignment10 />} />
          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App;