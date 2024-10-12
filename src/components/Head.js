import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleNav } from "../utils/appToggleSlice";

const Head = () => {
  const [search, setSearch] = useState([]);
  //search suggestion
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  // show suggestion only on focus , onBlur hide search suggestion
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    //make api call after every keypress
    //but id the diffrence between two api call is <200ms decline the api call
    // searchSuggestionResult(); //so intead of calling api like this searchSuggestionResult();4
    //call this after 2 sec
    const timer = setTimeout(() => {
      searchSuggestionResult();
    }, 300);
    //cleanup function
    return () => {
      clearInterval(timer);
    };
  }, [search]);
  // Debouncing using useEffect is very easy. but in plain JS it is complicated.
  // WHen useEffect is called?
  /*
  - When search will change useEffect will be called
  1- key press - i
  - reder the component
  - useEffect will be called
  - start timer and make api call after >200ms

  2- even beofore 200ms I key press - ip (before 200ms I press p "ip")
  - destroy the component and updateComponent() will call, because component unmounted, call the useEffect return method also
  -  so this way even before the timer 200 expires it declines the api call beacuse it clear up and call the cleanup function of useEffect. this way api will be called after 200ms only.
  - re-render the component 
  - useEffect will be called
  - same timer or new timer ---- Ans: new timer variable
  - start new timer and make api call after >200ms
  - suppose 200 ms passed and there was no key press then it will make a API call
OUTPUT: intially api was calling on each key press, for i i get search, for "ip" i get search results, for "iph" i get search for "ipho" I get search results for "iphone" i get search. 
But now untill 3sec it cancel all the api call by calling clean up function after 3 sec we have typed "iphone pro". now We got only one result for "iphone pro". that how we make the code optimized.
  */

  //  show search suggestion on each key press

  const searchSuggestionResult = async () => {
    console.log(search);

    const data = await fetch(
      "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        search
    );
    const json = await data.json();
    console.log(json[1]);
    //key press pe jo search aaya api se use set kr rahe hai searchsuggestion var me   and use searchSuggestion var inside li and map the conetent
    setSearchSuggestion(json[1]);
  };
  //dispatch an action to use that action on click
  const dispatch = useDispatch();

  const toggleHamburgerMenu = () => {
    //dispatch an action toggleNav which is changing the state means now oclick pe isSidebarOpen true become false. so now according to state isSideOpen, we have to show and hide sidebar. using ternary
    const result = dispatch(toggleNav());
    console.log(result);
  };
  return (
    <div className=" grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={toggleHamburgerMenu}
          className=" h-11 px-2 cursor-pointer"
          alt="Hamburger"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp"
        />
        <img
          className=" h-11 "
          alt="Youtube Logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        />
      </div>
      <div className="col-span-10 m-auto">
        <form className=" ">
          <div>
            <input
              className=" w-80  border-gray-400 border-solid border-2 p-1 rounded-l-full "
              type="search"
              id="gsearch"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="px-1 border-gray-400 border-solid p-1 border-2 rounded-r-full">
              🔍
            </button>
          </div>
          {/* // showSuggestion false by default, make it true using setsearchSuggestion ans showSuggestion only on onfocus of input */}
          {showSuggestion && (
            <div className="fixed bg-white  p-3 w-96 shadow-lg rounded-md border-gray-300">
              <ul>
                {searchSuggestion.map((s) => {
                  return (
                    <li key={s} className="py-2 hover:bg-gray-100 ">
                      🔍 {s}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </form>
      </div>

      <div className="col-span-1">
        <img
          className="h-11"
          alt="user icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};
export default Head;

// youtube head has 3 section hamburger Menu logo + serch + user icon and all
