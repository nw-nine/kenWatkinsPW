import "./Dashboard.css"

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
            <h5 className="galleryTitle">FEATURED SETS, PROPS, VEHICLES AND DRAWINGS</h5>
            <div className="gallery">

            </div>
        </div>
        </>
    )
}

export default Dashboard