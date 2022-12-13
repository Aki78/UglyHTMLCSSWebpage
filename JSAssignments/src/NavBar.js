import {Link} from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <p>Prompt is not supported for modern React Routers so I used Input instead.</p>
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
              <li><Link to="M3Assignment11" >Assignment11</Link></li>
            </ul>
            <h3>Module 4</h3>
            <ul>
              <li><Link to="M4" >Assignment</Link></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default NavBar;
