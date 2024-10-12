import React from "react";

const VedioCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  return (
    <div className="p-2 m-2 w-80">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <h2 className="font-bold py-1  ">{title}</h2>
      <p className=" text-gray-700 ">{channelTitle}</p>
      <span className=" text-gray-700 ">{statistics.viewCount} Views</span>
    </div>
  );
};

export default VedioCard;
