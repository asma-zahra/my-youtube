import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  //susbscibe to store to any specific portion to read result
  const isSidebaropen = useSelector((store) => store.app.isSidebaropen);
  //early return if isSidebaropen false then null, otherwise jsx of sidebar will show
  if (!isSidebaropen) return null;

  return (
    <div className=" w-44 shadow-md py-5 px-3">
      <ul className="mb-5">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold mb-3">Explore</h1>
      <ul className="mb-5">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movie</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};

/*
sidebar need state boolen value wahi state head me use karenge. head and sidebar are sibling. so should I keep state in app.js . so that I can pass value.
Answer: No
Create a global space beacusea many place you need toggle like hamburger menu. so keep it on redux store. so that anywhere you can subscribe.   
*/
/*
create a redux store and provide it to react
1- create slice give name , initialstate bcz ab ham usestate nahi use karenge. we will use intialState, to modify this state we will use not setFunction but the reducer function.
2- export all reducer and actions
3- add slice into Store
4- now store is fully ready , provide it to app using <provider> component to app.js bcz here we have all the component which is getting redered on app
5- check redux toolkit frequently to insure that everything is working properly.
*/
