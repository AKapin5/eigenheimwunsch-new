import { useState } from "react";
import { Homepage as HomePage } from "./Homepage"; // your current homepage component
import welcomeImage from "../assets/images/dist/new_main_pc.jpg";
import mobileImage from "../assets/images/dist/new_main_mobi.jpg";

export default function Page() {
  const [entered, setEntered] = useState(false);

  if (entered) {
    return <HomePage />;
  }

  return (
    <div
      className="relative w-screen h-screen cursor-pointer overflow-hidden"
      onClick={() => setEntered(true)}
    >
      <picture className="absolute inset-0 h-full w-full">
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <img
          src={welcomeImage}
          alt="Welcome"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-white text-3xl font-bold animate-pulse">
          Click anywhere to enter
        </div>
      </div>
    </div>
  );
}