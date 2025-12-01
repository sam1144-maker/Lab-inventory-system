import Header from "../components/Header.jsx";
import HeroRoleSection from "../components/HeroRoleSection.jsx";
import LiquidEther from "../components/LiquidEther.jsx";

const LIQUID_COLORS = ["#5227FF", "#FF9FFC", "#B19EEF"];

function LandingPage() {
  return (
    <>
      <div className="bg-black">
        <Header />

        <div className="relative w-full min-h-screen">
          <LiquidEther className="absolute inset-0 z-0 bg-gray-900/20"
            colors={LIQUID_COLORS}
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
          
          <div className="relative z-10">
            <HeroRoleSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
