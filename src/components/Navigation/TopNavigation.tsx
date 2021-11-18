import React from "react";

interface TopNavigationProps {}

const TopNavigation = (props: TopNavigationProps) => {
  return (
    <div className="flex w-screen h-16 bg-black">
      {/* Browse Section */}
      <div className="w-1/5 bg-indigo-900">
        <p>Browse</p>
      </div>

      {/* Search Section */}
      <div className="w-2/5 bg-yellow-900">
        <p>Search</p>
      </div>

      {/* Profile Section */}
      <div className="w-2/5 bg-red-900">
        <p>Profile</p>
      </div>
    </div>
  );
};

export default TopNavigation;
