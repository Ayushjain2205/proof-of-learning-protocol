import React, { useState, useCallback, useMemo, useRef } from "react";
import { format, parseISO } from "date-fns";

interface ContributionData {
  [date: string]: number;
}

interface HoverInfo {
  content: string;
  x: number;
  y: number;
}

const ContributionGraph: React.FC = () => {
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);
  const graphRef = useRef<HTMLDivElement>(null);

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

  const formatDate = useCallback((date: Date): string => {
    return format(date, "yyyy-MM-dd");
  }, []);

  const contributionData = useMemo<ContributionData>(() => {
    const data: ContributionData = {};
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      data[formatDate(d)] = Math.floor(Math.random() * 5); // 0-4 for activity levels
    }
    return data;
  }, [startDate, today, formatDate]);

  const getColor = useCallback((level: number | undefined): string => {
    if (level === undefined) return "#ebedf0"; // Light gray for empty boxes
    if (level === 0) return "#ebedf0"; // Light gray for zero contributions
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
    const weeksArray: (Date | null)[][] = [];
    let currentDate = new Date(startDate);
    while (currentDate <= today) {
      const week: (Date | null)[] = [];
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
    (date: Date | null, event: React.MouseEvent<HTMLDivElement>) => {
      if (date && graphRef.current) {
        const rect = event.currentTarget.getBoundingClientRect();
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
    <div ref={graphRef} className="p-6 bg-white rounded-lg shadow-md relative">
      <div className="flex">
        <div className="w-12 mr-4 mt-8">
          {weekdays.map((day, index) => (
            <div key={index} className="h-5 text-xs text-gray-400 mb-1">
              {day}
            </div>
          ))}
        </div>
        <div>
          <div className="flex mb-2">
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
              <div key={weekIndex} className="flex flex-col mr-1">
                {week.map((date, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="w-4 h-4 mb-1 rounded-sm cursor-pointer"
                    style={{
                      backgroundColor: date
                        ? getColor(contributionData[formatDate(date)])
                        : getColor(undefined),
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
            top: `${hoverInfo.y - 35}px`,
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
