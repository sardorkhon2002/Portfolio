import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai"; // Import icons
const SidebarItem = ({
  icon,
  label,
  expanded,
}: {
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
}) => (
  <div className="flex items-center w-full px-4">
    <div className="flex items-center h-12 w-full hover:bg-gray-700 rounded-md transition-all duration-300 cursor-pointer">
      {/* Icon container */}
      <div className="flex justify-center items-center w-12 z-10">{icon}</div>
      {/* Label container */}
      <div
        className={`flex-1 overflow-hidden ${
          expanded ? "opacity-100" : "opacity-0"
        } ${
          expanded ? "visible" : "invisible"
        } transition-opacity duration-500 ease-in-out`}
      >
        <span className="whitespace-nowrap">{label}</span>
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-500 flex flex-col ${
        isExpanded ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out`}
    >
      <button
        className="text-gray-600 mt-5 mb-5 p-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "expand" : "collapse"}
      </button>
      <div className="flex-1">
        <SidebarItem
          icon={<AiOutlineHome size="24" />}
          label="Dashboard"
          expanded={isExpanded}
        />
        <SidebarItem
          icon={<AiOutlineUser size="24" />}
          label="Profile"
          expanded={isExpanded}
        />
        <SidebarItem
          icon={<AiOutlineSetting size="24" />}
          label="Settings"
          expanded={isExpanded}
        />
        {/* Add more sidebar items here */}
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 p-10 pl-20 or pl-64 text-2xl font-bold overflow-auto">
        {/* Replace with actual dashboard content */}
      </div>
    </div>
  );
}
