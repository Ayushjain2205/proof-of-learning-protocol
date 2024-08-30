import React from "react";
import ActivityGraph from "@/components/Custom/ActivityGraph";
import Badge from "@/components/Custom/Badge";
import { badges } from "../helpers/badges";

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

const profile: React.FC = () => {
  const formatAddress = (address: string): string => {
    return `${address.slice(0, 7)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[40px] items-start justify-center">
      {/* Left column with fixed width */}
      <div className="w-full lg:w-[300px] flex-shrink-0">
        <div className="flex flex-col">
          <img
            src="/images/graduate.svg"
            className="rounded-full border bg-gray-100 w-full max-w-[300px] mx-auto"
            alt=""
          />
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">Ayush Jain</h1>{" "}
            <p className="text-gray-400">iyushjain.edu</p>
            <p className="text-gray-400 text-xs">
              {formatAddress("0xCafa93E9985793E2475bD58B9215c21Dbd421fD0")}
            </p>
            <div className="mt-[25px]">
              <TrophyDisplay trophies={1005} />
            </div>
          </div>
          <div className="flex flex-col mt-[50px]">
            <div className="flex items-center">
              <img src="/images/streak.svg" className="h-[48px]" alt="" />
              <span className="text-lg text-gray-700">5 days streak</span>
            </div>
            <div className="flex items-center">
              <img src="/images/badge.svg" className="h-[48px]" alt="" />
              <span className="text-lg text-gray-700">5 badges</span>
            </div>
            <div className="flex items-center">
              <img src="/images/answers.svg" className="h-[48px]" alt="" />
              <span className="text-lg text-gray-700">5 answers</span>
            </div>
            <div className="flex items-center">
              <img src="/images/certificate.svg" className="h-[48px]" alt="" />
              <span className="text-lg text-gray-700">5 certificates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right column - responsive */}
      <div className="flex-1 w-full lg:w-auto min-w-0">
        <ActivityGraph />
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img src="/images/badge.svg" className="h-8" alt="" />
            <h2 className="text-lg font-semibold ">Badges</h2>
          </div>
          <div className="overflow-x-auto py-4 scrollbar-hide">
            <div className="flex space-x-8 px-8">
              {badges.map((badge, index) => (
                <div key={index} className="flex-shrink-0">
                  <Badge
                    title={badge.title}
                    subtitle={badge.subtitle}
                    icon={badge.icon}
                    footer={badge.footer}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
