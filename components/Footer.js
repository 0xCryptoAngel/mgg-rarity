import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t border w-full p-4 items-center text-xs justify-center bg-gray-450">
      <a
        className="flex items-center mb-4 text-gray-400 hover:text-gray-200"
        href="https://twitter.com/cybergeckogang"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoLogoTwitter />
        </span>
        Twitter
      </a>
      <a
        className="flex items-center mb-4 text-gray-400 hover:text-gray-200"
        href="https://github.com/Gecko-Gang"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoLogoGithub />
        </span>
        Github
      </a>
      <a
        className="flex items-center mb-4 text-gray-400 hover:text-gray-200"
        href="https://tzkt.io/tz1c1hnp1jx7Q6nCohvWkhWS7SBxqS8cWHLa/operations/"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <FiCoffee />
        </span>
        Buy me coffee
      </a>
    </div>
  );
};
