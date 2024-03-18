const Star = ({ rating }) => {
    var array = Array(rating);
    array.fill(0);

    return (
        <div className="flex pt-2 pb-4">
            {array.map((rating, ratingIndex) => (
                <img key={ratingIndex} className="size-3" src="https://www.svgrepo.com/show/525539/star.svg"/>
            ))}
        </div>
    )
}
export const Rating = ({restaurant}) => {

    return (
        <Star rating={restaurant.rating}/>
    )
}