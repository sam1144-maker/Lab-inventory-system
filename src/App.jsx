// App.jsx

import Header from "./components/Header.jsx";
import HeroRoleSection from "./components/HeroRoleSection.jsx";
import LiquidEther from "./components/LiquidEther.jsx";

function App() {
  return (
    <>
    <div className="bg-black">
      
      <Header />

      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <LiquidEther className="absolute inset-0 z-0"
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <HeroRoleSection  
              className="relative z-10"
            />
            </div>

      </div>
          </div>
    </>
  );
}

export default App;
