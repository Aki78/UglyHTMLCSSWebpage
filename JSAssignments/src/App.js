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
      <p>test</p>
      <Router >
        <div class="container">
          <div class="nav__bar">
            <ul>
              <li><Link to="Assignment1" >1</Link></li>
              <li><Link to="Assignment3" >3</Link></li>
              <li><Link to="Assignment4" >4</Link></li>
              <li><Link to="Assignment5" >5</Link></li>
              <li><Link to="Assignment6" >6</Link></li>
              <li><Link to="Assignment7" >7</Link></li>
              <li><Link to="Assignment8" >8</Link></li>
              <li><Link to="Assignment9" >9</Link></li>
              <li><Link to="Assignment10" >10</Link></li>
            </ul>
          </div>
        </div>
        <div>

          <Routes>
            <Route path="Assignment1" element={<Assignment1 />} />
          </Routes>
          <Routes>
            <Route path="Assignment2" element={<Assignment2 />} />
          </Routes>
          <Routes>
            <Route path="Assignment3" element={<Assignment3 />} />
          </Routes>
          <Routes>
            <Route path="Assignment4" element={<Assignment4 />} />
          </Routes>
          <Routes>
            <Route path="Assignment5" element={<Assignment5 />} />
          </Routes>
          <Routes>
            <Route path="Assignment6" element={<Assignment6 />} />
          </Routes>
          <Routes>
            <Route path="Assignment7" element={<Assignment7 />} />
          </Routes>
          <Routes>
            <Route path="Assignment8" element={<Assignment8 />} />
          </Routes>
          <Routes>
            <Route path="Assignment9" element={<Assignment9 />} />
          </Routes>
          <Routes>
            <Route path="Assignment10" element={<Assignment10 />} />
          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App;