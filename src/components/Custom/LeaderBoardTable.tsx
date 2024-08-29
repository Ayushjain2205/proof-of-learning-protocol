import React from "react";

const leaderboardData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Player ${i + 1}`,
  level: 50 - i,
}));

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

const LeaderboardTable = () => {
  return (
    <div className="p-4 mx-auto">
      <div className="border-4 border-black rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#00EDBE90] border-b-4 border-black p-4 flex">
          <div className="font-extrabold text-xl flex-1 text-center">#</div>
          <div className="font-extrabold text-xl flex-1 text-center">Name</div>
          <div className="font-extrabold text-xl flex-1 text-center">Level</div>
        </div>

        {/* Body */}
        <div>
          {leaderboardData.map((player, index) => (
            <div
              key={player.id}
              className={`flex p-4 hover:bg-[#CCF5E8] transition-colors ${
                index !== leaderboardData.length - 1
                  ? "border-b-2 border-black"
                  : ""
              }`}
            >
              <div className="flex-1 flex justify-center items-center">
                {renderIdImages(player.id)}
              </div>
              <div className="flex-1 font-bold text-lg text-center">
                {player.name}
              </div>
              <div className="flex-1 font-bold text-lg text-center">
                {player.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
