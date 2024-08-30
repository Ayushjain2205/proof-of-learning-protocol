import React, { useState } from "react";
import {
  leaderboardData,
  LeaderboardEntry,
} from "../../helpers/leaderboardData";
import DoubleButton from "./DoubleButton";

const renderIdImages = (id: number): JSX.Element[] => {
  const digits = id.toString().split("");
  return digits.map((digit: string, index: number) => (
    <img
      key={index}
      src={`/images/numbers/${digit}.svg`}
      alt={digit}
      className="h-[36px]"
    />
  ));
};

interface TrophyDisplayProps {
  trophies: number;
}

const TrophyDisplay: React.FC<TrophyDisplayProps> = ({ trophies }) => (
  <div className="relative inline-flex items-center">
    <div className="bg-yellow-100 rounded px-4 py-2 flex items-center">
      <span className="font-bold text-2xl mr-2">{trophies}</span>
    </div>
    <div className="absolute -right-7 -top-1">
      <img src="/images/trophy.svg" className="h-[64px]" alt="Trophy" />
    </div>
  </div>
);

type Category = "learners" | "teachers" | "contributors";

const DoubleButtonWrapper: React.FC<{
  category: Category;
  activeCategory: Category;
  onClick: (category: Category) => void;
}> = ({ category, activeCategory, onClick }) => (
  <div onClick={() => onClick(category)}>
    <DoubleButton
      buttonText={category.charAt(0).toUpperCase() + category.slice(1)}
      buttonColor={activeCategory === category ? "black" : "#00EDBE"}
      backgroundColor={activeCategory === category ? "#00EDBE" : "white"}
      width="140px"
      height="48px"
    />
  </div>
);

const LeaderboardTable: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("learners");

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div className="p-4 mx-auto max-w-[1000px]">
      <div className="flex mb-4 justify-center space-x-4">
        {(["learners", "teachers", "contributors"] as const).map((category) => (
          <DoubleButtonWrapper
            key={category}
            category={category}
            activeCategory={activeCategory}
            onClick={handleCategoryChange}
          />
        ))}
      </div>
      <div className="border-4 border-black rounded-2xl overflow-hidden">
        <div>
          {leaderboardData[activeCategory].map(
            (player: LeaderboardEntry, index: number) => (
              <div
                key={player.id}
                className={`flex p-4 px-16 transition-colors items-center ${
                  index !== leaderboardData[activeCategory].length - 1
                    ? "border-b-2 border-black"
                    : ""
                }`}
              >
                <div className="flex-1 flex items-center">
                  {renderIdImages(player.id)}
                </div>
                <div className="flex-1 font-bold text-lg">
                  {player.name}.edu
                </div>
                <div className="flex-1 ml-[250px]">
                  <div className="font-bold text-sm">
                    {player.badges} Badges
                  </div>
                  <div className="font-bold text-sm text-gray-500">
                    Streak: {player.streak}
                  </div>
                </div>
                <div className="flex items-center">
                  <TrophyDisplay trophies={player.trophies} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
