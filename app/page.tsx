"use client";
import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import emailjs from "emailjs-com";
import Carousel from "./components/carosel";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { width, height } = useWindowSize();

  const carouselWords = [
    "....",
    "....",
    "....",
    "....",
    "....", 
    "I",
    "....",
    "....",
    "....",
    "....",
    "....",
    "💖 love 💖",
    "....",
    "....",
    "....",
    "....",
    "....",
    "You Rithika🤖",
  ];

  // Function to toggle audio play/pause
  const toggleAudio = () => {
    const audio = document.getElementById('a1') as HTMLAudioElement;
    if (!isPlaying) {
      audio?.play();
      setIsPlaying(true);
    } else {
      audio?.pause();
      setIsPlaying(false);
    }

  };

  // Carousel auto-advance effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselWords.length);
    }, 1000); // Change word every 1 second

    return () => clearInterval(interval);
  }, [carouselWords.length]);

  const handleYesClick = () => {
    setShowConfetti(true);

    // EmailJS Parameters
    const serviceID = "service_r669ah7";
    const templateID = "template_e6zsn81";
    const publicKey = "1db3qNrQVawinPw-C";

    const templateParams = {
      to_name: "Balu",
      from_name: "Sinamika",
      message: "She clicked YES! 🎉💖",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    setTimeout(() => setShowConfetti(false), 5000);
  };

  const moveNoButton = () => {
    if (noButtonRef.current) {
      noButtonRef.current.style.position = "absolute";
      noButtonRef.current.style.top = `${Math.random() * 80 + 10}%`;
      noButtonRef.current.style.left = `${Math.random() * 80 + 10}%`;
    }
  };

  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-pink-100 to-purple-200 relative overflow-hidden">
      <h1>Im sorry</h1>
    </main>
  );
}