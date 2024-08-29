import React, { useState, useCallback, useMemo, useRef } from "react";
import { format, parseISO } from "date-fns";

const ContributionGraph = () => {
  const [hoverInfo, setHoverInfo] = useState(null);
  const graphRef = useRef(null);

  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const startDate = useMemo(() => {
    const date = new Date(today);
    date.setDate(today.getDate() - 364);
    return date;
  }, [today]);

  const formatDate = useCallback((date) => {
    return format(date, "yyyy-MM-dd");
  }, []);

  const contributionData = useMemo(() => {
    const data = {};
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      data[formatDate(d)] = Math.floor(Math.random() * 5); // 0-4 for activity levels
    }
    return data;
  }, [startDate, today, formatDate]);

  const getColor = useCallback((level) => {
    if (level === undefined) return "#ebedf0"; // Light gray for empty boxes
    const baseColor = { r: 20, g: 27, b: 235 }; // #141BEB
    const factor = level / 4; // Normalize to 0-1
    return `rgb(${baseColor.r + (255 - baseColor.r) * (1 - factor)}, 
                 ${baseColor.g + (255 - baseColor.g) * (1 - factor)}, 
                 ${baseColor.b + (255 - baseColor.b) * (1 - factor)})`;
  }, []);

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

  const weeks = useMemo(() => {
    const weeksArray = [];
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
      weeksArray.push(week);
    }
    return weeksArray;
  }, [startDate, today]);

  const handleMouseEnter = useCallback(
    (date, event) => {
      if (date && graphRef.current) {
        const rect = event.target.getBoundingClientRect();
        const graphRect = graphRef.current.getBoundingClientRect();
        const formattedDate = formatDate(date);
        const activities = contributionData[formattedDate] || 0;
        const tooltipContent = `${activities} contribution${
          activities !== 1 ? "s" : ""
        } on ${format(parseISO(formattedDate), "MMMM do")}`;
        setHoverInfo({
          content: tooltipContent,
          x: rect.left - graphRect.left + rect.width / 2,
          y: rect.top - graphRect.top,
        });
      }
    },
    [formatDate, contributionData]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverInfo(null);
  }, []);

  return (
    <div ref={graphRef} className="p-4 bg-white rounded-lg shadow-md relative">
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
                    className="w-3 h-3 m-[1px] rounded-sm cursor-pointer"
                    style={{
                      backgroundColor: date
                        ? getColor(contributionData[formatDate(date)])
                        : getColor(),
                    }}
                    onMouseEnter={(e) => handleMouseEnter(date, e)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {hoverInfo && (
        <div
          className="absolute bg-gray-800 text-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap"
          style={{
            left: `${hoverInfo.x}px`,
            top: `${hoverInfo.y - 30}px`,
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        >
          {hoverInfo.content}
        </div>
      )}
    </div>
  );
};

export default ContributionGraph;
