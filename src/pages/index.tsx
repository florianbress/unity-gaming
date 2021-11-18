import Head from "next/head";
import CoreHead from "../components/Core/CoreHead";
import Sidebar from "../components/Navigation/Sidebar";
import TopNavigation from "../components/Navigation/TopNavigation";

export default function Home() {
  return (
    <div>
      <CoreHead />
      <div className="flex">
        <Sidebar expanded={true} />
        <div>
          <TopNavigation />
          <div>
            <p>content </p>
          </div>
        </div>
      </div>
    </div>
  );
}
