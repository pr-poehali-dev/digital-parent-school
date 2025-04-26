
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectFeatures from "@/components/ProjectFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
