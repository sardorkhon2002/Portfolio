import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import cx from "classnames";

const dashboardItems = [
  {
    key: "1",
    icon: <AiOutlineHome size={24} />,
    label: "Home",
    children: (
      <div>
        <div className="flex items-center w-full px-4">
          <div className="flex items-center h-12 w-full hover:bg-gray-700 rounded-md transition-all duration-300 cursor-pointer">
            <div className="flex justify-center items-center w-12 z-10"></div>
            <div>
              <span className="whitespace-nowrap">text</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    icon: <AiOutlineHome size={24} />,
    label: "Home",
    children: null,
  },
  {
    key: "3",
    icon: <AiOutlineHome size={24} />,
    label: "Home",
    children: null,
  },
  {
    key: "4",
    icon: <AiOutlineHome size={24} />,
    label: "Home",
    children: null,
  },
  {
    key: "5",
    icon: <AiOutlineHome size={24} />,
    label: "Home",
    children: null,
  },
  {
    key: "6",
    icon: <AiOutlineHome size={24} />,
    label: "Home",
    children: null,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("1");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    setIsExpanded(true);
    addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobileMenu(true);
        setIsExpanded(true);
      } else {
        setIsMobileMenu(false);
      }
    });
    return () => {
      removeEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setIsMobileMenu(true);
          setIsExpanded(true);
        } else {
          setIsMobileMenu(false);
        }
      });
    };
  }, []);

  return (
    <div className="flex">
      <div>
        <div
          className={cx("p-4 cursor-pointer", {
            block: isMobileMenu,
            hidden: !isMobileMenu,
          })}
          onClick={() => setIsMobileMenu(false)}
        >
          <div className="h-1 w-6 bg-black mb-1"></div>
          <div className="h-1 w-6 bg-black mb-1"></div>
          <div className="h-1 w-6 bg-black"></div>
        </div>

        <div
          className={cx(
            "fixed top-0 left-0 h-screen bg-gray-500 flex flex-col transition-all duration-500 ease-in-out overflow-hidden",
            {
              "w-64": isExpanded,
              "w-20": !isExpanded,
              "transition-transform -translate-x-full duration-500 ease-in-out":
                isMobileMenu,
            },
          )}
        >
          <button
            className={cx("text-gray-600 mt-5 mb-5 p-2", {
              hidden: window.innerWidth < 768,
            })}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "expand" : "collapse"}
          </button>
          <button
            className={cx("text-white block", {
              hidden: window.innerWidth > 768,
            })}
            onClick={() => setIsMobileMenu(!isMobileMenu)}
          >
            close
          </button>
          <div className="flex-1 flex flex-col items-center gap-3">
            {dashboardItems.map((item) => (
              <div className="flex items-center w-full px-4" key={item.key}>
                <div
                  className={cx(
                    "flex items-center h-12 w-full hover:bg-gray-700 rounded-md transition-all duration-300 cursor-pointer",
                    {
                      "bg-gray-700": item.key === activeTab,
                    },
                  )}
                  onClick={() => setActiveTab(item.key)}
                >
                  <div className="flex justify-center items-center w-12 z-10">
                    {item.icon}
                  </div>
                  <div
                    className={`flex-1 overflow-hidden ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    } ${
                      isExpanded ? "visible" : "invisible"
                    } transition-opacity duration-500 ease-in-out`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-10 pl-20 or pl-64 text-2xl font-bold overflow-auto">
        {dashboardItems.map((item) => {
          if (item.key === activeTab) {
            return <div key={item.key}>{item.children}</div>;
          }
        })}
      </div>
    </div>
  );
}
