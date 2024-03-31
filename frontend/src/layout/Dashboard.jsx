import "./Dashboard.css"
import barDrawing from "../assets/bar/drawings_01.jpg"
import CiaDrawing from "../assets/CIA/PattLogScreenGrab.jpg"
import SubDrawing from "../assets/H2O Drone/subInWaterCopy.jpg"

function Dashboard() {

    return (
        <>
        <div className="heroDiv">
            <h1 className="name">Ken Watkins</h1>
            <h3 className="infoText">ART DIRECTION & SET DESIGN <br />FOR FILM & TELEVISION </h3>
            <div className="bottomText">
                <p className="disc">
                Welcome to my portfolio. I invite you to explore my site to get a better understanding of my specialties, <br /> technique and professional experience. Enjoy browsing, and please get in touch with any questions
                </p>
                <button className="portfolioButton">Portfolio</button>
            </div>
        </div>
        <div className="galleryHero">
            <h2 className="galleryTitle">Gallery</h2>
            <h5 className="galleryDisc">FEATURED SETS, PROPS, VEHICLES AND DRAWINGS</h5>
            <div className="gallery">
                <div className="galleryList">
                    <img src={CiaDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
                <div className="galleryList">
                    <img src={barDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
                <div className="galleryList">
                    <img src={SubDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
                <div className="galleryList">
                    <img src={barDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
                <div className="galleryList">
                    <img src={barDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
                <div className="galleryList">
                    <img src={barDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
                <div className="galleryList">
                    <img src={barDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
                <div className="galleryList">
                    <img src={barDrawing} alt="Bar Drawing" className="photoLink"  />
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard