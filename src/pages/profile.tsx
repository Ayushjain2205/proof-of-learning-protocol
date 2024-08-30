import React from "react";

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
    <div className="flex flex-row gap-[40px] items-center justify-center">
      <div className="flex flex-col w-[300px] h-[400px]">
        <img
          src="/images/graduate.svg"
          className="rounded-full border bg-gray-100"
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
      <div className="flex flex-1">Other Column</div>
    </div>
  );
};

export default profile;
