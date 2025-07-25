import reactLogo from "../src/assets/react.svg"

export default function Navbar() {
    return(
        <>
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="React Logo" className="nav-logo" />
                <span className="span">ReactFacts</span>
            </nav>
        </header>
        </>
    )
}