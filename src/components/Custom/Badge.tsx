import React from "react";

interface BadgeProps {
  title: string;
  subtitle: string;
  icon?: string;
  footer?: string;
}

const Badge: React.FC<BadgeProps> = ({ title, subtitle, icon, footer }) => {
  return (
    <div className="relative inline-block group w-[350px] h-[400px] cursor-pointer">
      <div className="relative z-30 p-4 border-2 border-black rounded bg-white transition-transform duration-300 ease-in-out group-hover:-translate-x-[3%] group-hover:-translate-y-[3%] h-full transform -translate-x-[1%] -translate-y-[1%]">
        <div className="flex flex-col flex-1 w-full justify-between items-start mb-4">
          <div className="flex flex-row justify-between w-full">
            <img src="/images/logo.svg" className="h-10" alt="" />
            <div className="flex items-center px-2 h-[30px] text-xs font-semibold text-white bg-[#141BEB] rounded-full">
              LEARN
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col w-full mt-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm">{subtitle}</p>
              <div className="flex justify-center w-full">
                <img
                  className="mt-8 h-[160px] w-full object-contain"
                  src={icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {footer && (
          <div className="w-full text-xs text-center mt-2 absolute bottom-4">
            {footer}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 z-20 w-full h-full  rounded"></div>
      <div
        className="absolute top-0 left-0 z-10 w-full h-full rounded transform translate-x-1 translate-y-1"
        style={{ background: "#00EDBE" }}
      ></div>
    </div>
  );
};

export default Badge;
