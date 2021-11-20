import React from "react";
import Image from "next/image";

interface SidebarProps {
  expanded: boolean;
  actionEnabled: boolean;
}

const NewsEntry = [
  {
    icon: "/icons/game-play.svg",
    name: "New Feed",
    action: "/img/icon/Arrow.svg",
  },
  {
    icon: "/icons/trending.svg",
    name: "Trending",
    action: "/img/icon/Arrow.svg",
  },
  {
    icon: "/icons/profile.svg",
    name: "Following",
    action: "/img/icon/Arrow.svg",
  },
  {
    icon: "/icons/camera.svg",
    name: "Your Videos",
    action: "/img/icon/RoundedPlus.svg",
  },
  {
    icon: "/icons/document.svg",
    name: "Playlist",
    action: "/img/icon/Arrow.svg",
  },
];

const FollowingMockData = [
  {
    image: "/img/ava-1.png",
    username: "Dylan Hodges",
    icon: "/img/icon/live-icon.svg",
  },
  {
    image: "/img/ava-2.png",
    username: "Vincent Parks",
    icon: "/img/icon/notification-simple-small.svg",
  },
  {
    image: "/img/ava-3.png",
    username: "Richard Bowers",
    icon: "/img/icon/live-icon.svg",
  },
  {
    image: "/img/ava-4.png",
    username: "Isaac Lambert",
    icon: "/img/icon/live-icon.svg",
  },
  {
    image: "/img/ava-2.png",
    username: "Lillie Nash",
    icon: "/img/icon/notification-simple-small.svg",
  },
  {
    image: "/img/ava-5.png",
    username: "Edith Cain",
    icon: "/img/icon/live-icon.svg",
  },
  {
    image: "/img/ava-1.png",
    username: "Jerry Shermany",
    icon: "/img/icon/notification-simple-small.svg",
  },
];

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sticky w-64 h-screen overflow-scroll shadow-inner bg-dashboardBackground scrollbar-hide">
      {/* Header Section */}
      <div className="relative w-full h-screen pl-5 pr-8">
        <div className="p-5 h-1/7">
          <div className="flex items-center justify-center h-24 space-x-3">
            <button className="hover:curso/r-pointer">
              <Image src="/img/logo-white.svg" width="141px" height="32px" />
            </button>
            <button className="hover:cursor-pointer">
              <Image src="/icons/burger-icon.svg" width="32px" height="32px" />
            </button>
          </div>
        </div>

        {/* News Feed */}
        <div className="mb-2 h-2/7">
          <p className="p-3 text-xs font-medium text-textDeactive font-inter">
            New Feeds
          </p>
          {NewsEntry.map((e) => {
            return (
              <div
                className="flex items-center p-1 mb-3"
                key={e.name + "_newsnavigation"}
              >
                <div className="pl-2 pr-4">
                  <Image src={e.icon} width="24px" height="24px" />
                </div>
                <p className="text-sm font-semibold font-inter text-textDeactive">
                  {e.name}
                </p>
                <div className={`p-2 ${!props.actionEnabled ? "hidden" : ""}`}>
                  <Image src={e.action} width="24px" height="24px" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <hr className="my-10 border-t-2 border-trueGray-200 border-opacity-10 " />

        {/* Following Section*/}
        <div className="mb-2 h-3/7">
          <p className="p-3 text-xs font-medium text-textDeactive font-inter">
            Following
          </p>
          {FollowingMockData.map((e) => {
            return (
              <div
                className="flex items-center p-1 mb-3 space-x-2"
                key={e.username + "_followingnavigation"}
              >
                <div className="pl-2">
                  <Image src={e.image} width="24px" height="24px" />
                </div>
                <p className="text-sm font-semibold font-inter text-textDeactive">
                  {e.username}
                </p>
                <div className="">
                  <Image src={e.icon} width="24px" height="24px" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <hr className="my-10 border-t-2 border-trueGray-200 border-opacity-10 " />

        {/* Site Section */}
        <div className="h-3/6">
          <p className="p-3 text-xs font-medium text-textDeactive font-inter">
            Unity Gaming
          </p>

          <div className="flex p-1 mb-3 space-x-2">
            <div className="pl-2">
              <Image src="/img/icon/Chat.svg" width="24px" height="24px" />
            </div>
            <p className="text-sm font-semibold font-inter text-textDeactive">
              Chat
            </p>
          </div>
          <div className="flex p-1 mb-3 space-x-2">
            <div className="pl-2">
              <Image src="/img/icon/Setting.svg" width="24px" height="24px" />
            </div>
            <p className="text-sm font-semibold font-inter text-textDeactive">
              Settings
            </p>
          </div>
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
    </div>
  );
};

export default Sidebar;
