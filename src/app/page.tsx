import AboutUsSection from "@/components/sections/home/AboutUs";
import Banner from "@/components/sections/home/Banner";
import ServicesSection from "@/components/sections/home/Ourservice";
import ProjectsSection from "@/components/sections/home/Projects";
import TechnologyStack from "@/components/sections/home/Techstack";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUsSection />
      <ServicesSection />
      <TechnologyStack />
      <ProjectsSection />
    </div>
  );
}
