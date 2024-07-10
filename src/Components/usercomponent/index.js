import React, { useEffect, useState } from "react";
import "./index.css";
import PurchasesList from "./Purchases/purchase";
import UserProfile from "./userprofile/userprofile";
import { useParams } from "react-router-dom";
import FavouritiesList from "./favroties/favroties";

const Purchases = () => {
  const dummyPurchases = [
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio1.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio2.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio3.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio4.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio5.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio6.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio7.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio8.mp3",
    },
  ];

  const [purchases, setPurchases] = useState(dummyPurchases);

  return (
    <div className="App">
      {purchases.length !== 0 && <PurchasesList purchases={purchases} />}
    </div>
  );
};
const Favourites = () => {
  const dummyPurchases = [
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio1.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio2.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio3.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio4.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio5.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio6.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio7.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio8.mp3",
    },
  ];

  const [purchases, setPurchases] = useState(dummyPurchases);

  return (
    <div className="App">
      {purchases.length !== 0 && <FavouritiesList purchases={purchases} />}
    </div>
  );
};
const UserInfo = () => (
  <div>
    <UserProfile />
  </div>
);

const UserComponent = () => {
  const [activeTabs, setActiveTab] = useState('purchases');


  const { tab } = useParams();



  return (
    <div className="user-component">
      <div className="tab-content">
        <div className="tabs">
          <button onClick={() => setActiveTab("purchases")}>Purchases</button>
          <button onClick={() => setActiveTab("favourites")}>Favourites</button>
          <button onClick={() => setActiveTab("userinfo")}>User Info</button>
        </div>
        {activeTabs === "purchases" && <Purchases />}
        {activeTabs === "favourites" && <Favourites />}
        {activeTabs === "userinfo" && <UserInfo />}
      </div>
    </div>
  );
};

export default UserComponent;