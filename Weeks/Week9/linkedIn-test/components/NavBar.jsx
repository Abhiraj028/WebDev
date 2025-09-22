import { useEffect, useState } from "react"

export default function NavBar(){
    const [notifs,setNotifs] = useState(1)

    useEffect(()=>{
        setInterval(()=>setNotifs(prev => prev+0.5),1000)
    },[])

    return(
        <>
            <img src="https://imgs.search.brave.com/b9_r4DlOo68gqtek0t9oOyxjzIapQJGPD377xDkUF0M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9y/ZWQtbm90aWZpY2F0/aW9uLWJlbGwtaWNv/bi10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LTczNTgxMTY5Njkz/NDQ5MGRjanpxaW02/bHAucG5nP3Y9MjAy/NTA0MjgxNA" style={{margin:"50px",width:"30px"}} ></img>
            <div className="numberUp" style={{position:"absolute",
                                              top:"80px",
                                              left:"530px",
                                              width:"20px",
                                              background:"pink",
                                              borderRadius:"15px",
                                              padding:"2px"
            }} >{notifs}</div>
        </>
    )
}