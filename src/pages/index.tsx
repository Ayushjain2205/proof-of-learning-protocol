import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

interface Activity {
  id: string;
  user: string;
  type:
    | "level"
    | "merch"
    | "quiz"
    | "certificate"
    | "forum"
    | "bridge"
    | "coin";
  timestamp: Date;
}

const activityMessages = {
  level: "leveled up successfully",
  merch: "bought merch from the store",
  quiz: "completed a quiz",
  certificate: "earned a new certificate",
  forum: "posted in the forum",
  bridge: "bridged some tokens",
  coin: "earned some coins",
};

const ActivityBox: React.FC<{ activity: Activity }> = ({ activity }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="relative group w-full h-[250px]"
  >
    <div className="absolute z-10 bg-white border-2 border-black rounded p-4 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-x-[2%] group-hover:-translate-y-[2%] transform -translate-x-[1%] -translate-y-[1%] flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-500 font-semibold">{activity.user}</span>
        <span className="text-xs text-gray-400">
          {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
        </span>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <img
          src={`/images/transactions/${activity.type}.svg`}
          alt={activity.type}
          className="w-20 h-20 mb-3"
        />
        <p className="text-center font-medium">
          {activityMessages[activity.type]}
        </p>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-[#00EDBE] rounded transform translate-x-1 translate-y-1 -z-10"></div>
  </motion.div>
);

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    const names = [
      "Emma",
      "Liam",
      "Olivia",
      "Noah",
      "Ava",
      "Ethan",
      "Sophia",
      "Mason",
      "Isabella",
      "William",
      "Mia",
      "James",
      "Charlotte",
      "Benjamin",
      "Amelia",
      "Elijah",
      "Harper",
      "Lucas",
      "Evelyn",
      "Alexander",
    ];

    const types: Array<Activity["type"]> = [
      "level",
      "merch",
      "quiz",
      "certificate",
      "forum",
      "bridge",
      "coin",
    ];

    const generateRandomActivity = (
      id: string,
      timeOffset: number
    ): Activity => ({
      id,
      user: names[parseInt(id) - 1],
      type: types[Math.floor(Math.random() * types.length)],
      timestamp: new Date(Date.now() - timeOffset),
    });

    const initialActivities: Activity[] = names.map((_, index) => {
      const id = (index + 1).toString();
      const timeOffset = Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000); // Random time within the last week
      return generateRandomActivity(id, timeOffset);
    });

    initialActivities.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
    setActivities(initialActivities);

    const timer1 = setTimeout(() => {
      const newActivity = generateRandomActivity("21", 0);
      setActivities((prev) => [newActivity, ...prev]);
    }, 25000);

    const timer2 = setTimeout(() => {
      const newActivity = generateRandomActivity("22", 0);
      setActivities((prev) => [newActivity, ...prev]);
    }, 45000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const filteredActivities = activities.filter(
    (activity) =>
      (activity.user?.toLowerCase().includes(searchTerm.toLowerCase()) ??
        false) &&
      (!selectedType || activity.type === selectedType) &&
      (!selectedDate ||
        activity.timestamp.toDateString() ===
          new Date(selectedDate).toDateString())
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recent Activities</h1>

      <div className="mb-6 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search by user"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-2 border-black rounded px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#00EDBE] transition-all duration-300"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <div className="flex-grow md:flex-grow-0 md:w-1/4">
            <select
              value={selectedType || ""}
              onChange={(e) => setSelectedType(e.target.value || null)}
              className="w-full border-2 border-black rounded px-6 py-3 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#00EDBE] transition-all duration-300"
            >
              <option value="">All Types</option>
              {Object.keys(activityMessages).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-grow md:flex-grow-0 md:w-1/4">
            <input
              type="date"
              value={selectedDate || ""}
              onChange={(e) => setSelectedDate(e.target.value || null)}
              className="w-full border-2 border-black rounded px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#00EDBE] transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredActivities.map((activity) => (
            <ActivityBox key={activity.id} activity={activity} />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
