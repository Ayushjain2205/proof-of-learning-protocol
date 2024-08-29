import React from "react";

const ContributionGraph = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const generateDummyData = () => {
    const data = {};
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      data[formatDate(d)] = Math.floor(Math.random() * 5); // 0-4 for activity levels
    }
    return data;
  };

  const contributionData = generateDummyData();

  const getColor = (level) => {
    const baseColor = { r: 20, g: 27, b: 235 }; // #141BEB
    const factor = level / 4; // Normalize to 0-1
    return `rgb(${baseColor.r + (255 - baseColor.r) * (1 - factor)}, 
                 ${baseColor.g + (255 - baseColor.g) * (1 - factor)}, 
                 ${baseColor.b + (255 - baseColor.b) * (1 - factor)})`;
  };

  const weekdays = ["Mon", "", "Wed", "", "Fri", "", ""];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getWeeks = () => {
    const weeks = [];
    let currentDate = new Date(startDate);
    while (currentDate <= today) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        if (currentDate <= today) {
          week.push(new Date(currentDate));
        } else {
          week.push(null);
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }
    return weeks;
  };

  const weeks = getWeeks();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex">
        <div className="w-10 mr-2 mt-6">
          {weekdays.map((day, index) => (
            <div key={index} className="h-4 text-xs text-gray-400 mb-1">
              {day}
            </div>
          ))}
        </div>
        <div>
          <div className="flex mb-1">
            {months.map((month, index) => (
              <div
                key={index}
                className="flex-1 text-center text-xs text-gray-400"
              >
                {month}
              </div>
            ))}
          </div>
          <div className="flex">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col">
                {week.map((date, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="w-3 h-3 m-[1px] rounded-sm"
                    style={{
                      backgroundColor: date
                        ? getColor(contributionData[formatDate(date)] || 0)
                        : "transparent",
                    }}
                    title={
                      date
                        ? `${formatDate(date)}: ${
                            contributionData[formatDate(date)] || 0
                          } contributions`
                        : ""
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
