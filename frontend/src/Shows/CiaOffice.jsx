import { useNavigate } from "react-router-dom"
import CarouselItem from "./CarouselItem"
import conferenceBlueprint from "../assets/CIA/conference 4 const_2.jpg"
import highriseOffice from "../assets/CIA/._FROM BOSS.jpg"

function CiaOffice() {

    const carouselItems = [
        {
            title: "Conferene Blueprint",
            image: conferenceBlueprint
        },
        {
            title: "highrise Office",
            image: highriseOffice
        },
    ]

    const navigate = useNavigate()

    function goBack() {
        navigate("/", { state: { scrollToGallery: true } })
    }

    return (
        <>
            <div className="show">
                <div className="showInfo">
                    <h2 className="showTitle">CIA Office</h2>
                    <h5 className="showDisc">Stage Set</h5>
                </div>
                <button className="goBack" onClick={goBack}>Back</button>
            </div>
            <div className="carousel">
                {carouselItems.map((item, index) => {
                    return <CarouselItem item={item} key={index}/>
                })}
            </div>
        </>
    )
}

export default CiaOffice