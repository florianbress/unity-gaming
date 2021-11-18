import React from "react";
import Image from "next/image";

interface SidebarProps {
  expanded: boolean;
}

const NewsEntry = [
  { name: "New Feed", icon: "" },
  { name: "Trending", icon: "" },
  { name: "Following", icon: "" },
  { name: "Your Videos", icon: "" },
  { name: "Playlist", icon: "" },
];

const FollowingMockData = [
  {
    image: "/img/avatars/avatar.svg",
    username: "Dylan Hodges",
    icon: "/img/live-icon.svg",
  },
  {
    image: "/img/avatars/avatar-1.svg",
    username: "Vincent Parks",
    icon: "/img/icon/notification-simple-small.svg",
  },
  {
    image: "/img/avatars/avatar-2.svg",
    username: "Richard Bowers",
    icon: "/img/live-icon.svg",
  },
  {
    image: "/img/avatars/avatar-3.svg",
    username: "Isaac Lambert",
    icon: "/img/live-icon.svg",
  },
  {
    image: "/img/avatars/avatar-4.svg",
    username: "Lillie Nash",
    icon: "/img/icon/notification-simple-small.svg",
  },
  {
    image: "/img/avatars/avatar-5.svg",
    username: "Edith Cain",
    icon: "/img/live-icon.svg",
  },
  {
    image: "/img/avatars/avatar-4.svg",
    username: "Jerry Shermany",
    icon: "/img/notification-simple-small.svg",
  },
];

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="h-screen bg-black w-52">
      {/* Header Section */}
      <div className="h-16 bg-red-900 w-52">
        <p>Header</p>
      </div>

      {/* News Feed */}
      <div className="bg-green-900 h-2/6">
        <p>News Feed</p>
        {NewsEntry.map((e) => {
          <div className="flex">
            <p>{e.name}</p>
          </div>;
        })}
      </div>

      {/* Following Section*/}
      <div className="bg-blue-900 h-2/6">
        {FollowingMockData.map((e) => {
          return (
            <div className="flex">
              <Image src={e.image} width="24px" height="24px" />
              <p>{e.username}</p>
              <Image src={e.icon} width="24px" height="24px" />
            </div>
          );
        })}
        <p>Following</p>
      </div>

      {/* Site Section */}
      <div className="bg-yellow-900 h-3/6">
        <p>Site</p>
      </div>

      {/* Banner Section */}
      <div className="bg-indigo-900 h-2/6">
        <p>Banner </p>
      </div>

      {/* Theme Section */}
      <div className="h-16 bg-purple-900">
        <p>theme</p>
      </div>
    </div>
  );
};

export default Sidebar;
