import * as React from "react";
import { useState } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Rating } from "./Rating";

export const Card = ({ restaurant, onClickSetType }) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [buttonText, editButtonText] = useState("Copy");
  const [buttonStyling, editButtonStyling] = useState("bg-secondary-pink-dark hover:bg-secondary-pink-mid dark:hover:bg-slate-400");
  var lunchTrainSnippet = `/Lunchtrain ${restaurant.name} 11:00`;

  const handleCopyToClipboard = () => {
    copyToClipboard(lunchTrainSnippet);
    editButtonText("Command copied to clipboard!");
    editButtonStyling("bg-secondary-pink-mid dark:bg-slate-700");
  };

  return (
    <div className="flex-initial w-80 grow lg:grow-0 p-4 m-4 max-w-sm rounded-xl overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h3 className="font-bold text-l mb-2">
          <a className="hover:text-secondary-pink-dark hover:bg-secondary-pink-mid dark:hover:bg-slate-700" href={restaurant.link}>{restaurant.name}</a>
        </h3>
        <Rating restaurant={restaurant} />
        <p>Distance: {restaurant.distanceFromOffice} min</p>
        <div className="pt-4 pb-0">
          {restaurant.types && restaurant.types.map((type, typeIndex) => (
            <button onClick={() => onClickSetType(type)} key={typeIndex} className="inline-block bg-secondary-pink-light dark:bg-slate-800 rounded-full px-3 py-1 my-1 text-sm mr-2">
              {type}
            </button>
          ))}
        </div>
        <div className="pt-2 pb-2">
          <button
            onClick={() => handleCopyToClipboard(lunchTrainSnippet)}
            className={`flex items-center ${buttonStyling} rounded-full px-3 py-1 my-1 text-sm font-semibold dark:bg-slate-500`}>
            <span className="pr-4">{buttonText}</span>
            <img className="size-4" src="https://www.svgrepo.com/show/526961/copy.svg" />
          </button>
        </div>
      </div>
    </div>
  )

}