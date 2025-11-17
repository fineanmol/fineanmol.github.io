import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import { StyleProvider } from "../contexts/StyleContext";
import { SnowEffect } from "../components/SnowEffect/SnowEffect";
import "./Main.css";
import Profile from "./profile/Profile";
// import { educationInfo } from "../portfolio";

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    // Set initial theme based on system preference
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkPref.matches);

    // Listen for changes in system theme preference
    const handleThemeChange = (e) => {
      setIsDark(e.matches);
    };

    darkPref.addEventListener("change", handleThemeChange);

    // Check if current month is November (10), December (11), or January (0)
    const checkWinterMonths = () => {
      const currentMonth = new Date().getMonth();
      setShowSnow(currentMonth === 10 || currentMonth === 11 || currentMonth === 0);
    };

    checkWinterMonths();

    // Cleanup listener on unmount
    return () => {
      darkPref.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const changeTheme = useCallback(() => {
    setIsDark(prevIsDark => !prevIsDark);
  }, []);

  const contextValue = useCallback(() => ({
    isDark,
    changeTheme
  }), [isDark, changeTheme]);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={contextValue()}>
        {showSnow && <SnowEffect />}
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Talks />
        <Twitter />
        <Podcast />
        <Profile />
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;
