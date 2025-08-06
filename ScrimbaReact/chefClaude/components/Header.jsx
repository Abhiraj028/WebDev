import image from '../src/assets/image.png';

export default function Header() {
    return(
        <header className='header'>
            <div className='nav'>
                <img src={image} className="picture" alt="ChefClaude logo" />
                <h1 className='header-text'>Chef Claude</h1>
            </div>
                
        </header>
    )
}