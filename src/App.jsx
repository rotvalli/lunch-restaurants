import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import restaurantTypes from "../restaurantTypes.json";
import restaurantJson from '../restaurants.json'

const App = () => {
  const [restaurants, setRestaurants] = useState(restaurantJson.restaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantJson.restaurants);
  const [type, setType] = useState("");
  const [sorting, setSorting] = useState("distance");
  const [selectedSortOption, setSelectedSortOption] = useState("distance");

  const onClickSetType = (restaurantType) => {
    setType(restaurantType);
  }

  const filterRestaurants = () => {
    console.log(type);
    return restaurants.filter(restaurant => (type === "" || restaurant.types.includes(type)));
  }

  const sortRestaurants = (filteredRestaurants) => {
    if (sorting === "starRating") {
      return filteredRestaurants.sort((a, b) => b.rating - a.rating);
    } else {
      return filteredRestaurants.sort((a, b) => a.distanceFromOffice - b.distanceFromOffice);
    }
  }

  useEffect(() => {
    setSelectedSortOption(sorting);

    setFilteredRestaurants(sortRestaurants(filterRestaurants()));
  }, [type, sorting]);

  const filteredAndSortedRestaurants = sortRestaurants(filterRestaurants());

  return (
    <div className="container mx-auto mb-4 pb-4">
      <div className="text-center  bg-secondary-orange-mid p-4 mb-4">
      <h1 className="text-2xl mb-4">Restaurants near office</h1>
        <div className="m-4">
          <p className="p-2">Browse restaurants nearby Tampere Gofore office!</p>
          <p className="p-2">Use the copy button to copy a Lunchtrain command, ready to be pasted in Slack channels where /lunchtrain is in use.</p>
          <p className="p-2">Restaurant ratings are based on anonymous feedback, will be done in a more sophisticated manner once a back-end is implemented.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center"> 
          <div className="flex items-center p-4">
            <p className="p-2">Filter by restaurant type:</p>
            <form>
              <select className="p-2 mb-2 rounded-xl"value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">All Types</option>
                {restaurantTypes.map((type, index) => (
                  <option value={type.value} key={index}>{type.label}</option>
                ))}
              </select>
            </form>
          </div>
          <div className="flex items-center p-4">
            <p className="p-2">Sort by:</p>
            <form>
              <select className="p-2 mb-2 rounded-xl" value={selectedSortOption} onChange={(e) => setSorting(e.target.value)}>
                <option value="distance">Distance</option>
                <option value="starRating">Star rating</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map(filteredRestaurant => (
            <Card key={filteredRestaurant.id} restaurant={filteredRestaurant} onClickSetType={onClickSetType} />
          ))}
      </div>
    </div>
  )
}

export default App
