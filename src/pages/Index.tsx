import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Situations from "@/components/Situations";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Situations />
        <About />
        <div id="diagnostic">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
