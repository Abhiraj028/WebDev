export default function Entry(props){
    console.log(props.entry);
    return(
        <>
        <div className="box">
            <div className="picture">
                <img className="img-japan" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            <div className="rhs-text">
                <div className="mapsStuff">
                    <div className="mapsRHS">
                        <img className="icon" src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-vector-eps-10-of-a-red-map-marker-icon-isolated-on-png-image_12670278.png" alt="Map Icon" />
                        <span className="location">{props.entry.country}</span>
                    </div>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="mapName">{props.entry.title}</h2>
                <p className="date">{props.entry.date}</p>
                <p className="description">{props.entry.text}</p>
            </div>
            
            
        </div>
        <div class="divider"></div>
        </>
        
    )
}