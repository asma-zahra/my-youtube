import React from "react";
import Button from "./Button";

export const ButtonsList = () => {
  const buttonName = [
    "All",
    "News",
    "Podcast",
    "Pakistani Cuisine",
    "Self Care",
    "Watched",
    "Recently uploaded",
    "Live",
    "New to you",
  ];

  return (
    <>
      {buttonName.map((btName, index) => {
        return <Button key={index} name={btName} />;
      })}
    </>
  );
};
