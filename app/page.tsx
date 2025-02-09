"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import pro_image from "../public/pro_image.webp";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import emailjs from "emailjs-com";
import Carousel from "./components/carosel";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const noButtonRef = useRef(null);
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
    "You Rithika🤖"
  ];

  // Function to toggle audio play/pause
  const toggleAudio = () => {

    if (!isPlaying) {
      var audio = document.getElementById('a1');
      audio?.play();
      setIsPlaying(true);
    } else {
      var audio = document.getElementById('a1');
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

      {/* Audio Control Button */}

      <audio id='a1'>
        <source src='/Aye-Sinamika.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={toggleAudio}
        className="audioToggle fixed top-4 right-4 p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/70 transition-all z-50"
      >
        {isPlaying ? "🔇" : "🔊"}
      </button>

      {/* Multicolored Twinkling Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Random bright colors
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Section 1: Landing Page – A Beautiful Beginning */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-8 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-rose-700 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          🌸 Aye Sinamika AI 🤖
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl animate-fade-in delay-500">
          "Once upon a time, love letters were written on paper. Now? Well, welcome to the digital age—I made you a whole website instead. I mean, why settle for a text when I can be extra?🌚"
          <br /><br />
          "Anyway, I have something to confess... something we've kept secret till now."
        </p>
        <div className="mt-10 animate-bounce">
          <span className="text-4xl">👇</span>
        </div>
      </section>

      {/* Section 2: Interactive Journey – Our Love Story */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-8 bg-white/20 backdrop-blur-sm">
        <h2 className="text-5xl font-bold text-purple-700 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          ⁉️ How Did We Even End Up Here?
        </h2>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl animate-fade-in delay-500">
          "Honestly? I have no clue how I ended up with you. I mean, I’ve loved you without even meeting you. I don’t know how you sound, how you look in real life—but somehow, here we are. And I wouldn’t change a thing."
          <br /><br />
          "Flirting is NOT my comfort zone (I tried, I failed), but loving you? That just came naturally. So, I hope equal efforts from both sides make this even stronger."
          <br /><br />
          "Be by my side through everything—when we grow, when we get rich, when we travel, and when we love even more than we do now."
          <br /><br />
          "Oh, and I know our conversations mostly revolve around your college and studies. At this point, I could probably pass your exams for you. But hey, maybe one day we’ll talk about something else? (Or will your answers continue to bring an end to every conversation?)" 😆
          <br /><br />
          "Also, your attitude? I won’t lie—I kinda like it. But let’s be real... do you have to flex it on me 24/7? Maybe, just maybe, I deserve a discounted version of it?" 😜
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in delay-1000">
          <button className="px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform">
            First time we talked 💬
          </button>
          <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:scale-105 transition-transform">
            First time I realized I liked you 💕
          </button>
          <button className="px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:scale-105 transition-transform">
            First time I imagined a future with you 🌟
          </button>
        </div>
      </section>

      {/* Section 3: Carousel – Next, Next, Love, You */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-8 bg-purple-100/50">
        <h2 className="text-5xl font-bold text-rose-700 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
          🎡 Anddd Here it is
        </h2>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl animate-fade-in delay-500">
        I know I annoy you a lot (and I’m not stopping 😜), but if I have your approval... then I can finally say—
        </p>
        <div className="mt-10 flex flex-col items-center gap-8">
          <div className="text-6xl font-bold text-purple-700 animate-pulse">
            {carouselWords[carouselIndex]}
          </div>
          <div className="w-64 h-64 md:w-96 md:h-96 relative rounded-lg overflow-hidden shadow-2xl">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Section 4: Final Reveal – The Big Question */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-8 bg-white/20 backdrop-blur-sm">
        {showConfetti && (
          <>
            <Confetti width={width} height={height} numberOfPieces={1000} recycle={false} gravity={0.3} origin={{ x: 0, y: 0 }} />
            <Confetti width={width} height={height} numberOfPieces={1000} recycle={false} gravity={-0.3} origin={{ x: 1, y: 1 }} />
          </>
        )}
        <h2 className="text-5xl font-bold text-purple-700 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          The Big Question
        </h2>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl animate-fade-in delay-500">
          "I know this will be big decision.I don’t need grand gestures, fancy words, or over-the-top romance. Just love me the way I love you—unconditionally, effortlessly, endlessly."
        </p>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl animate-fade-in delay-500">
          "So here’s my question—"
        </p>
        <div className="mt-10 text-6xl font-bold text-rose-700 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
          Will you be my Valentine? 💕
        </div>
        <div className="mt-10 flex items-center gap-10">
          <button
            onClick={handleYesClick}
            className="px-8 py-4 text-3xl font-bold text-white bg-green-500 rounded-lg hover:scale-105 transition-transform"
          >
            Yes 💕
          </button>
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            className="px-8 py-4 text-3xl font-bold text-white bg-red-500 rounded-lg"
            style={{ position: "relative" }}
          >
            No 😜
          </button>
        </div>
      </section>
    </main>
  );
}