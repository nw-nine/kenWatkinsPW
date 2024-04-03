import { useNavigate } from "react-router-dom"

function Nav() {

    const navigate = useNavigate()

    function goHome() {
        navigate("/")
    }

    function goToResume() {
        navigate("/", { state: { scrollToGallery: true } })
    }

    return (
        <nav className="navBar">
            <button onClick={goHome} className="navButton">Home</button>
            <button onClick={goToResume} className="navButton">Resume</button>
            <button className="navButton">Contact</button>
        </nav>
    )
}

export default Nav