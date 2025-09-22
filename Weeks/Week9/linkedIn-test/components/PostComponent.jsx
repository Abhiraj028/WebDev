import { useState } from "react"

export default function PostComponent(props){
    
    
    return(
        <>
            
            <div className="head" style={{display:"flex",gap:"50px"}}>
                <main className="mainBox" style={{background:"gray",
                                                width:"400px",
                                                borderRadius:"15px",
                                                padding:"15px"
                }}>

                    <div className="topBar" style={{display:"flex",
                                                    alignItems:"center"
                    }}>
                        <div className="todBarImg">
                            <img style={{height:"50px"}} src="https://imgs.search.brave.com/kALB13PbrpV8GFcitM77l_IhPiVQ79lOWOS8mDjao8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AtbWNk/bi5ha2FtYWkubmV0/LmluL3N1YmplY3Qv/MjAyMy0wMS0xNy0w/LjM2OTgyNjc5NDI4/NTEzOTQuanBn"></img>
                        </div>
                        <div className="topBarContent" style={{marginLeft:"10px", 
                                                            display:"flex",
                                                            flexDirection:"column",
                                                            alignItems:"flex-start"
                        }}>
                            <h4 style={{margin:"0px"}}>{props.name}</h4>
                            <h5 style={{margin:"0px"}}>{props.followers} followers</h5>
                            <div style={{display:"flex"}}>
                                <h5 style={{margin:"0px"}}>12m</h5><img style={{height:"20px"}} src="https://imgs.search.brave.com/A-wP31LZbf85bKKCnQTXFyC4xzmt9lXd09qSvNe7xFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yNi8xMC9n/cmV5LXRyYW5zcGFy/ZW50LWVhcnRoLWds/b2JlLXZlY3Rvci0y/ODE4MjYxMC5qcGc"></img>
                            </div>
                        </div>
                    </div>
                    <div className="textBody" style={{textAlign:"left"}}>
                        <h5>100x Devs Hackathon BLUDDDDD</h5>
                        <p>Are you ready to earn some money and shi</p>
                    </div>
                    <div className="imgBody">
                        <img style={{width:"400px"}} src="https://imgs.search.brave.com/B3pvO6lqj-MX5OUJycK8DJoPkqE3JFVNOtQjjoASIV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NzcxNDYwNS92ZWN0/b3IvaGFja2F0aG9u/LWZvcnVtLWNvbmNl/cHQtY2FyZC0zZC1p/c29tZXRyaWMtdmll/dy12ZWN0b3IuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVpD/aUJ6TmZxU3JyZVFE/djZ0Ri1aWGo2SW0z/SnZ4YWlxQWVnVC1U/R3NCZXc9"></img>
                    </div>
                </main>
                <div className="card" style={{height:"300px",
                                            width:"200px",
                                            borderRadius:"15px",
                                            background:"lightGray",
                                            padding:"10px"
                }}>
                    <div className="topp" style={{background:"gray",
                                                width:"200px",
                                                height:"50px",
                                                borderTopLeftRadius:"15px",
                                                borderTopRightRadius:"15px"
                    }}>

                    </div>
                    <div  className="imgg">
                        <img style={{position:"absolute",
                                    width:"60px",
                                    top:"70px",
                                    left:"600px"
                        }}src="https://imgs.search.brave.com/kALB13PbrpV8GFcitM77l_IhPiVQ79lOWOS8mDjao8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AtbWNk/bi5ha2FtYWkubmV0/LmluL3N1YmplY3Qv/MjAyMy0wMS0xNy0w/LjM2OTgyNjc5NDI4/NTEzOTQuanBn" />
                    </div>
                    <div style={{width:"200px",height:"100px",paddingLeft:"0px",paddingTop:"40px"}} className="bodyy">
                        <h4>Harkirat Singh</h4>
                        <h5><i>Working with WebRTC</i></h5>
                    </div>
                    <div className="linee" style={{width:"200px",height:"1px",background:"gray"}}></div>
                    <div className="bottomm">
                        <div className="firstt" style={{display:"flex",justifyContent:"space-between"}}>
                            <h5>Profile viewers</h5>
                            <h5 style={{color:"blue"}}>41,903</h5>
                        </div>
                        <div className="firstt" style={{display:"flex",justifyContent:"space-between"}}>
                            <h5>Post Impressions</h5>
                            <h5 style={{color:"blue"}}>1,313</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}