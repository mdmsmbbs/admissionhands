import Image from "next/image";
import styles from "./page.module.css";
import Head from 'next/head';
// import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import DesktopHeader from "./Components/DesktopHeader";
import HomeBanner from "./Components/HomeBanner";
import Copyright from "./Components/Copyright/Copyright";
import Footer from "./Components/Footer/footer";
import AboutSection from "./Components/AboutAdmission/AboutSection";
import HowToApply from "./Components/HowToApply/HowToApply";
import CounterArea from "./Components/CounterArea/CounterArea";
import StudentArea from "./Components/StudentArea/StudentArea";
import ChooseArea from "./Components/ChooseArea/ChooseArea";
import TestimonialSlider from "./Components/testimonials/testimonials";
import Facilities from "./Components/Facilities/Facilities";
import Header from "./Components/CommonHeader/header";

export default function WelcomePage() {
  return (
    <div>
       {/* <Header/> */}
       {/* <Navbar/> */}
      <DesktopHeader/>
       <HomeBanner/>
       <AboutSection/>
       
       <HowToApply/>
       <StudentArea/>
       <CounterArea/>
       <ChooseArea/>
       <TestimonialSlider/>
       <Facilities/>
       <Footer/>
       <Copyright/>
    </div>
  );
}

