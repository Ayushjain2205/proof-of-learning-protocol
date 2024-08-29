import React from "react";
import { Button } from "@/components/ui/button";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      className="relative font-bold py-2 px-4 rounded shadow-md 
                 transition-all duration-200 ease-in-out
                 before:content-[''] before:absolute before:top-0 before:left-0 
                 before:w-full before:h-full before:bg-white before:rounded 
                 before:transform before:translate-y-0.5 before:translate-x-0.5 
                 hover:before:translate-y-0 hover:before:translate-x-0
                 before:transition-transform before:duration-200 before:ease-in-out"
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  );
};

export default CustomButton;
