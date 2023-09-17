import React from "react";
import styles from "./styles.module.scss";

interface MainHeaderProps {
  mainHeading1: string;
  mainHeading2: string;
  mainHeading3: string;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  mainHeading1,
  mainHeading2,
  mainHeading3,
}) => {
  const { header } = styles;
  return (
    <h1
      className={`${header} flex flex-col justify-center items-center text-6xl text-center leading-none sm:text-8xl select-none tracking-tightest font-extrabold`}
    >
      <span className="flex justify-center">
        <span
          data-content={mainHeading1}
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-[#A5A5A8] before:animate-gradient-background-1"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
            {" "}
            {mainHeading1}
          </span>
        </span>
        <span
          data-content={mainHeading2}
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-[#A5A5A8] before:animate-gradient-background-2"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
            {" "}
            {mainHeading2}
          </span>
        </span>
      </span>
      <span
        data-content={mainHeading3}
        className="mt-20 relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-[#A5A5A8] before:animate-gradient-background-3"
      >
        <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
          {" "}
          {mainHeading3}
        </span>
      </span>
    </h1>
  );
};
