
function CarouselItem({ item }) {

    return (
        <div className="itemContainer">
            <img className="itemImage" src={item.image} alt={item.title} />
        </div>
    )

}

export default CarouselItem