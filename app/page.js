import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import GetToKnow from "./components/landing/GetToKnow";
import SeekHelp from "./components/landing/SeekHelp";
import HowItWorks from "./components/landing/HowItWorks";
import Services from "./components/landing/Services";
import ContactForm from "./components/landing/contact-form/ContactForm";
import Testimonials from "./components/landing/Testimonials";


export default function Home() {
  return (
   <div className="w-screen min-h-screen">
    <Navbar />
    <Landing />
    <GetToKnow />
    <SeekHelp />
    {/* <HowItWorks /> */}
    <Services />
    <Testimonials />
    <ContactForm />
   </div>
  );
}
