import { useEffect } from "react";

function getRandomBackground() {
    const totalImages = 9;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    return `../src/images/hero/hero-bg-${randomIndex}.png`;
}

function getRandomDescription() {
    const total = description.length - 1;
    const randomIndex = Math.floor(Math.random() * total) + 1;
    return description[randomIndex];
}

export default function Banner(brand) {
    const backgroundImage = getRandomBackground();
    const desc = getRandomDescription()

    return (
        <div className="banner w-full">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-20 shadow-xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                {brand.image === "random" ? (
                    <img
                        alt=""
                        src={backgroundImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : (
                    <img
                        alt=""
                        src={brand.image}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )
                }

                <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
                <div className="relative mx-auto max-w-2xl lg:mx-0">
                    <figure>
                        <blockquote className="mt-6 text-lg font-bold text-white sm:text-xl sm:leading-8">
                            <h1 className="neon-blue">
                                {brand.brand}
                            </h1>
                            <h5>{desc}</h5>
                            <h4 className="neon-pink">
                                <span> {brand.bonus} </span>
                            </h4>
                        </blockquote>
                        <div className="mt-8">
                            <a
                                href={brand.link}
                                target="blank_"
                                className="inline-flex items-center rounded-md bg-indigo-400/10 px-3.5 py-2.5 text-lg font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400 hover:bg-indigo-400/70"
                            >
                                Play now!
                            </a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

const description = [
    "Experience the ultimate cyberpunk adventure. Dive into neon-lit streets and high-stakes excitement.",
    "Step into a world where luck shines brighter than neon. Embrace the thrill and win big at our casino!",
    "Unlock the treasures of tomorrow. Play and experience next-level gaming.",
    "Feel the pulse of big wins. High-voltage games and massive jackpots await you.",
    "High-tech meets high stakes. Dive into a world of futuristic wins and endless possibilities.",
    "Get ready for a shockwave of excitement. Play and light up your winnings.",
    "Where the future meets fortune. Enjoy electrifying games and endless winning opportunities.",
    "Discover a casino like no other. Neon lights, big wins, and endless excitement await you.",
    "The future of gaming is here. Join for a chance to win big in a neon-lit world.",
    "Power up your gaming experience. Electrifying games and huge rewards are waiting for you.",
    "Feel the beat of big wins. Let your luck shine through. Claim your fortune today!",
    "A casino that redefines winning. Enjoy thrilling games and electrifying jackpots.",
    "Step into the electric atmosphere. Unleash your luck and enjoy big wins.",
    "Where every spin is charged with excitement. Ignite your fortune and play now.",
    "Pulse-pounding action awaits. Spin the reels and let the neon guide you to victory.",
    "Experience the rhythm of winning. Ride the wave of excitement and big rewards.",
    "Where every game pulses with potential. Light up your luck and win big.",
    "Your dreams of winning come true here. Embrace the thrill and massive jackpots.",
    "A casino that turns dreams into reality. Enjoy neon-lit games and endless excitement.",
    "Step into a dreamlike world of big wins. Let your fortune unfold and play now."]