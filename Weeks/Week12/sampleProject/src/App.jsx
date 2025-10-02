import './App.css'
import { Routes , Route, Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { YearBody } from '../components/YearBody'
import { EmailBody } from "../components/EmailBody"
import { OTPBody } from '../components/OTPBody'
import { FinalPage } from '../components/FinalPage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<YearBody/>} />
        <Route path="/email" element={<EmailBody/>} />
        <Route path="/otp" element={<OTPBody/>} />
      </Route>
      <Route path="/final" element={<FinalPage/>} />
    </Routes>
  )
}

function Layout(){
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
