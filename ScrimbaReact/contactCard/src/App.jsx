import { useState } from 'react'
import ContactCard from '../components/contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contacts'>
      <ContactCard 
          personImage = "../src/assets/jjk.png"
          personName = "Yuji Itadori"
          personPhone = "4362-8172"
          personEmail = "yuji.itadori@gmail.com"
      />
      <ContactCard 
          personImage = "../src/assets/naruto.png"
          personName = "Naruto Uzumaki"
          personPhone = "7362-2173"
          personEmail = "naruto.uzumaki@gmail.com"
      />
      <ContactCard 
          personImage = "../src/assets/idiot.png"
          personName = "Bandar Boy"
          personPhone = "6712-9218"
          personEmail = "monkey.luffy@gmail.com"
      />
      <ContactCard 
          personImage = "../src/assets/freaky.png"
          personName = "Hisoka Morow"
          personPhone = "1348-4512"
          personEmail = "hisoka.kids@gmail.com"
      />
    </div>
  )
}

export default App
