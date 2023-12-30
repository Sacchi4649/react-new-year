import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";
import videoBg from "./assets/videoBg.mkv";

function App() {
  const [newYearMessage, setNewYearMessage] = useState([
    "Waiting for 2024 . . .",
  ]);
  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const remainingTime = newYearDate - currentDate;
    return remainingTime;
  }

  return (
    <>
      {/* <Particles init={particleInit} options={{ preset: "fireworks" }} /> */}
      <video
        src={videoBg}
        autoPlay
        loop
        className="object-cover absolute h-screen w-screen -z-10 top-0 left-0"
      />

      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
            typeSpeed={60}
            deleteSpeed={45}
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage(["Bye 2023!", "Happy new year 2024!"])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
