import AboutHero from "../components/about/AboutHero";
import AboutSection from "../components/about/AboutSection";
import PartnerSection from "../components/about/PartnerSection";
import StaffSection from "../components/about/StaffSection";
import StatsCounterSection from "../components/about/StatsCounterSection";
import WelcomeAbout from "../components/about/WelcomeAbout";

export default function About() {
  return (
    <>
      <AboutHero />
      <WelcomeAbout />
      <AboutSection />
      <StaffSection />
      <StatsCounterSection />
      <PartnerSection />
    </>
  );
}
