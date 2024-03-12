import * as React from "react";
import { useState } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Rating } from "./Rating";

export const Card = ({ restaurant }) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [buttonText, editButtonText] = useState("Copy Lunchtrain command");
  const [buttonStyling, editButtonStyling] = useState("bg-secondary-pink-dark hover:bg-secondary-pink-mid");
  var lunchTrainSnippet = `/Lunchtrain ${restaurant.name} 11:00`; 

  const handleCopyToClipboard = () => {
    copyToClipboard(lunchTrainSnippet);
    editButtonText("Command copied to clipboard!");
    editButtonStyling("bg-secondary-pink-mid");
  };

    return (
        <div className="flex-initial w-80 grow lg:grow-0 p-4 m-4 max-w-sm rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h3 className="font-bold text-l mb-2"> 
            <a className="hover:text-secondary-pink-dark" href={restaurant.link}>{restaurant.name}</a>
          </h3>
          <Rating restaurant={restaurant}/>
          <p>Distance: {restaurant.distanceFromOffice} min</p>
          <div className="pt-4 pb-0">
            {restaurant.types && restaurant.types.map((type, typeIndex) => (
              <span key={typeIndex} className="inline-block bg-secondary-pink-light rounded-full px-3 py-1 my-1 text-sm mr-2">
                {type}
              </span>
            ))}
          </div>
          <div className="pt-2 pb-2">
            <button 
              onClick={() => handleCopyToClipboard(lunchTrainSnippet)}
              className={`flex items-center ${buttonStyling} rounded-full px-3 py-1 my-1 text-sm font-semibold`}>
              <span className="pr-4">{buttonText }</span>
              <img className="size-4" src="https://www.svgrepo.com/show/526961/copy.svg" />
            </button>
          </div>
        </div>
      </div>    
    )

}