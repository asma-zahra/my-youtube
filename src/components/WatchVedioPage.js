import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeNav } from "../utils/appToggleSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchVedioPage = () => {
  //as soon as watchpage load dispatch an action closeNav and use it here to collapse the sidebar after the intial watch page load. so means under useEffect we will dispatch action CloseNav
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeNav());
  }, []);

  // read vedio id from url of a particular vedio and load that vedioWatch
  // const param = useParams();
  // console.log(param);

  // output: useParam is giving me empty object why? Ans:If the route contains no dynamic parameters, useParams returns an empty object.
  // Solution: useSearchParams like a hook see in react reuter dom doc
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  //output: we get browser URLSearchParam object
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          searchParam.get("v") +
          "?si=W3OGXFrI3369tant"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVedioPage;
