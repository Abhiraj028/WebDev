import { useEffect, useState } from "react"

export default function Main() {

    const [scene,setScene] = useState({
        topText : "Blud does not simply",
        bottomText : "Clug",
        img : "http://i.imgflip.com/1bij.jpg"
    })

    const [memeData,setMemeData] = useState([])

    function recieverFn(event){
        const {value, name} = event.currentTarget
        
        setScene(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes)) 
    },[])
    
    function imgChange(){
        const index = Math.floor(Math.random()*memeData.length+1)
        console.log(memeData[index].url)
        setScene(prev => {
            return {
                ...prev,
                img:memeData[index].url
            }
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={recieverFn}
                        value = {scene.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={recieverFn}
                        value={scene.bottomText}
                    />
                </label>
                <button onClick={imgChange}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src= {scene.img} />
                <span className="top">{scene.topText}</span>
                <span className="bottom">{scene.bottomText}</span>
            </div>
        </main>
    )
}