"use client"; // Mark this file as a Client Component

import Button from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import "./globals.css";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { useEffect, useState } from "react";
import Stats from "@/components/Stats";

const Home = () => {
  const [currentText, setCurrentText] = useState(""); // Track the current text being typed
  const rotatingTexts = ["Data Scientist", "Data Analyst", "AI Engineer", "AI/ML Developer", "ML Engineer"];
  const typingSpeed = 150;  // Typing Speed (in ms)
  const backspacingSpeed = 80;  // Backspacing Speed (in ms)
  const delayBeforeNext = 1500;  // Delay before starting the backspace effect (in ms)
  const [textIndex, setTextIndex] = useState(0); // Track the current role index
  const [isTyping, setIsTyping] = useState(true); // Flag to control typing and backspacing phases

  useEffect(() => {
    let typingTimeout;
    let backspacingTimeout;  // Define backspacingTimeout
    let index = 0;
    let currentRole = rotatingTexts[textIndex];
    let typedText = "";  // Temporary variable to store the current typed text

    // Function to type out the text
    const typeText = () => {
      if (index < currentRole.length) {
        typedText += currentRole[index];
        setCurrentText(typedText);  // Update state after each character
        index++;
        typingTimeout = setTimeout(typeText, typingSpeed); // Continue typing
      } else {
        // Once the text is fully typed, pause for reading before backspacing
        setTimeout(() => {
          setIsTyping(false); // Stop typing and start backspacing
        }, delayBeforeNext);
      }
    };

    // Function to backspace the text
    const backspaceText = () => {
      if (typedText.length > 0) {
        typedText = typedText.slice(0, typedText.length - 1);
        setCurrentText(typedText);  // Update state after each character is deleted
        backspacingTimeout = setTimeout(backspaceText, backspacingSpeed); // Continue backspacing
      } else {
        // After backspacing, switch to the next role
        setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsTyping(true); // Start typing the next role
      }
    };

    // If isTyping flag is true, start typing the text
    if (isTyping) {
      typeText();
    } else {
      backspaceText();
    }

    // Cleanup timeout handlers when the component is unmounted or re-rendered
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(backspacingTimeout);  // Now correctly defined
    };
  }, [textIndex, isTyping]); // Trigger the effect only when the role index or isTyping flag changes

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl rotating-text rotating-text-appear">{currentText}</span>
            <h1 className="h1 mb-6">
              Hello I&lsquo;m <br /><span className="text-accent">Stephan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel in crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;