import { useNavigate } from "react-router-dom"


export function Header(){
    const navigate = useNavigate()
    function homePress(){
        navigate("/")
    }
  return(
    <>
      <div className='flex justify-center items-center gap-4 my-25'>
        <img width={60  } className="cursor-pointer" onClick={homePress} src="https://imgs.search.brave.com/QJ0s8WlIgLuo5wJ9_KX4CaQNbb0n3oTs7UvVcKyVVTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMyLzIvY29tcHV0/ZXItc2hhcGUtbG9n/by1wbmdfc2Vla2xv/Z28tMzIzNDQ5LnBu/Zw"></img>
        <div className='flex text-4xl text-teal-400'>
          <div className=''>Webinar</div>
          <div className='text-white'>.gg</div>
        </div>
      </div>
    </>
  )
}
