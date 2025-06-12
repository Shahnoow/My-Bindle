import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWork from "./components/HowItWork";
import DonationSection from "./components/Donate_Section";
import Testimonials from "./components/Testimonials";

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <HowItWork />
      <DonationSection />
      {/* <Testimonials /> */}
    </main>
  );
}
