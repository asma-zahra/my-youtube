import React, { useState, useEffect } from "react";
import { YOUTUBE_API_KEY } from "../utils/constant";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);
  // Make an API call
  useEffect(() => {
    getYouTubeVedios();
  }, []);

  const getYouTubeVedios = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVedios(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {vedios.map((vedio) => (
        <Link to={"watch/?v=" + vedio.id} key={vedio.id}>
          <VedioCard key={vedio.id} info={vedio} />
        </Link>
      ))}
      ;
    </div>
  );
};

export default VedioContainer;

//let make vediocard clickable so that they can go to the watchVedio page. so give them Link.
//When we click on any vedio card. it will take to their specific url that contain thier id bcz we have provide link  to each card "/watch?v=+vedioid" exp:localhost3000/watch?v=VQC23VU
//we have made each watch page URL dynamic
