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
      className="relative flex items-center justify-center w-screen h-screen bg-black cursor-pointer overflow-hidden"
      onClick={() => setEntered(true)}
    >
      <picture className="absolute inset-0 flex items-center justify-center">
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <img
          src={welcomeImage}
          alt="Welcome"
          className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
        />
      </picture>

      {/* Optional overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <div className="text-white text-3xl font-bold animate-pulse">
          Click anywhere to enter
        </div>
      </div>
    </div>
  );
}