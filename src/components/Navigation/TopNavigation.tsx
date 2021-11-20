import Image from "next/image";
import React from "react";

interface TopNavigationProps {}

const TopNavigation = (props: TopNavigationProps) => {
  return (
    <div className="sticky w-full pt-6 pb-6 pl-16 pr-16 bg-dashboardBackground">
      <div className="flex items-center justify-center space-x-5">
        {/* Browse Section */}
        <div className="flex items-center w-1/5 space-x-2 cursor-pointer">
          <Image src="/icons/location.svg" width="24px" height="24px" />

          <p className="ml-4 text-sm font-semibold font-inter text-textDeactive">
            Browse
          </p>

          <div className="pl-6">
            <Image src="/icons/arrow-down.svg" width="10px" height="10px" />
          </div>
        </div>
        {/* Search Section */}
        <div className="flex w-2/5 space-x-3">
          <Image src="/icons/search.svg" width="24px" height="24px" />
          <input
            type="text"
            className="text-sm font-semibold outline-none bg-dashboardBackground font-inter text-textDeactive"
            placeholder="Search Everything"
          />
        </div>

        {/* Profile Section */}
        <div className="flex items-center justify-end w-2/5 space-x-20">
          <button>
            <Image src="/icons/plus-square.svg" width="24px" height="24px" />
          </button>

          <button>
            <Image src="/icons/bell.svg" width="24px" height="24px" />
          </button>
          <button>
            <Image src="/img/avatar.png" width="48px" height="48px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
