"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

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

    const triggerWhenVisitSite = () => {

        // EmailJS Parameters
        const serviceID = "service_r669ah7";
        const templateID = "template_e6zsn81";
        const publicKey = "1db3qNrQVawinPw-C";

        const templateParams = {
            to_name: "Balu",
            from_name: "Sinamika",
            message: "She Visted! 🎉💖",
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });

    };

    useEffect(() => {
        triggerWhenVisitSite()
    }, [])

    return (
        <main className="flex flex-col items-center bg-gradient-to-b from-pink-100 to-purple-200 relative overflow-hidden">
            {/* Audio Control Button */}
            <audio id="a1" ref={audioRef}>
                <source src="/Veesum-Velichathile.mp3" type="audio/mpeg" />
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

            <section className="max-w-2xl mx-auto text-center px-4 py-12">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                    <h1 className="text-3xl font-bold text-purple-800 mb-6">
                        A Message for You 💌
                    </h1>
                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Heyy, sorry, I got a little more frustrated that night. It was really a bad nightmare that I want to forget, never thought of a rejection.
                        </p>
                        <p>
                            I can understand what phase you are going through... I truly and strongly believe that you too love me, from when I texted you first to now. That made me create this site. The saddest part is I dreamt a life with you 🙃.
                        </p>
                        <p>
                            Mistakes happen, and I want you to know that I won&apos;t bring them up. Your past is yours, and I respect that completely.
                        </p>
                        <p>
                            And one more thing, when you&apos;re completely away from the phase you&apos;re going through right now, think that I&apos;m waiting for you.
                        </p>
                        <p>
                            I don&apos;t have the courage to message you after that night, but if you feel even a fraction of what I feel for you, maybe you could reply with that black smiley or sarcastic emoji? Either in DM, notes, or story, I&apos;d love it if you could set aside any hesitation, just for me. But if not, that&apos;s okay too—I&apos;ll understand. I care about you enough to respect your space, and I&apos;ll be alright.
                        </p>
                        <p className="text-purple-600 font-semibold">
                            I deserve you☻.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}