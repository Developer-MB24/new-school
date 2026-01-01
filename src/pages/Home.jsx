import AboutSection from "../components/home/AboutSection";
import AppDownloadSection from "../components/home/AppDownloadSection";
import Banner from "../components/home/Banner";
import CounterSection from "../components/home/CounterSection";
import FacilitiesSection from "../components/home/FacilitiesSection";
import GallerySection from "../components/home/GallerySection";
import LatestNews from "../components/home/LatestNews";
import Partner from "../components/home/Partner";
import PopularClasses from "../components/home/PopularClasses";
import StaffSection from "../components/home/StaffSection";
import TestimonialSection from "../components/home/TestimonialSection";
import WelcomeSection from "../components/home/WelcomeSection";
// import WelcomeSection from "../components/home/WelcomeSection";
// import AboutSection from "../components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Banner />
      <WelcomeSection />
      <AboutSection />
      <PopularClasses />
      <CounterSection />
      <StaffSection />

      <AppDownloadSection />
      <FacilitiesSection />
      <GallerySection />
      <TestimonialSection />
      <LatestNews />
      <Partner />
    </>
  );
}
