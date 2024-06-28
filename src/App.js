// import logo from './logo.svg';
import './App.css';
import Index from "./components/Index";
import Login from "./components/Login";
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter,Routes, Router, Route } from 'react-router-dom';
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar =()=>{
  return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="./components/Index.js">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./components/Login.js">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=".">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="./components/About.js" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href=".">Action</a></li>
            <li><a class="dropdown-item" href=".">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href=".">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
)}


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/index" element={<Index/>} />
      <Route path ="/login" element={<Login/>} />
      <Route path ="/about" element={<About/>} />
      <Route path='/header' element={<Header/>}/>

    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
