import Head from "next/head";
import CoreHead from "../components/Core/CoreHead";
import Sidebar from "../components/Navigation/Sidebar";
import TopNavigation from "../components/Navigation/TopNavigation";

export default function Home() {
  return (
    <div>
      <CoreHead title="News Feed" />
      <div className="flex">
        <Sidebar expanded={true} actionEnabled={false} />
        <div className="flex flex-col flex-1 w-screen h-screen">
          <TopNavigation />
          <div className="overflow-scroll scrollbar-hide bg-dashboardBackground">
            <div className="" style={{ height: "1500px" }}>
              <p className="font-semibold text-white font-inter">Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
