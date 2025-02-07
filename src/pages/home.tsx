import { AboutSection } from "@/components/content/AboutSection";
import { Hero } from "@/components/content/Hero";
import { Feature } from "@/components/content/Section2";
import Seo from "@/components/content/Seo";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Welcome to Home Page"
        description="Remlex Technologies IT Solutions"
      />
      <Hero />
      <AboutSection />
      <Feature />
    </>
  );
};

export default HomePage;
