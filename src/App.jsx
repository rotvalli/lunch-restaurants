import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import restaurantTypes from "../restaurantTypes.json";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [type, setType] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/restaurants")
    .then(response => {
      setRestaurants(response.data);
    })
  }

  useEffect(hook);

  return (
    <div className="container mx-auto mb-4 pb-4">
      <div className="text-center bg-secondary-orange-mid p-4 mb-4">
        <h1 className="text-2xl mb-4">Restaurants near office</h1>
        <div>
          <form>
            <select className="p-2 mb-2 rounded-xl"value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All Types</option>
              {restaurantTypes.map((type, index) => (
                <option value={type.value} key={index}>{type.label}</option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
         {restaurants.filter(restaurant => (type === "" || restaurant.types.includes(type)))
         .sort((a, b) => a.distanceFromOffice - b.distanceFromOffice)
         .map(filteredRestaurant => (
          <Card restaurant={filteredRestaurant} restaurants={filteredRestaurant} />
        ))} 
      </div>
    </div>


  )
}

export default App
