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
    <>
    <style>{`
      .page-enter-text {
        color: #fff;
        font-size: 1.875rem;
        font-weight: bold;
        text-align: center;
        word-break: break-word;
        white-space: normal;
        line-height: 1.3;
        padding: 0 1rem;
      }
      @media (max-width: 767px) {
        .page-enter-text {
          font-size: 1.25rem;
        }
      }
    `}</style>
    <div
      onClick={() => setEntered(true)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative", lineHeight: 0 }}>
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImage} />
          <img
            src={welcomeImage}
            alt="Welcome"
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh",
              width: "auto",
              height: "auto",
              display: "block",
            }}
          />
        </picture>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <div className="page-enter-text">
            Click anywhere to enter
          </div>
        </div>
      </div>
    </div>
    </>
  );
}