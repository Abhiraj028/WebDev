import './App.css'
import reactLogo from "./assets/react.svg"
function App() {

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

function Header(){
  return(
    <div className='header'>
      <img src={reactLogo} className="picture" alt="React logo" /> 
      <nav>
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

function Body(){
  return(
    <>
      <Heading/>
      <Pointers/>
    </>
  )
}

function Footer(){
  return(
    <footer>
      <small>© 2023 Abhiraj Gautam. All rights reserved</small>
    </footer>
  )
}

function Heading(){
  return(
    <h1>Welcome to React!</h1>
  )
}

function Pointers(){
  return(
    <ul>
      <li>Time to beat youself up!</li>
      <li>Don't stop until you matter!</li>
      <li>Time is running out!</li>
    </ul>
  )
}
export default App
