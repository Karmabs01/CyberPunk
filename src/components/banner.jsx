import heroPic1 from "../images/hero/hero-bg-1.png";
import heroPic2 from "../images/hero/hero-bg-2.png";
import heroPic3 from "../images/hero/hero-bg-3.png";
import heroPic4 from "../images/hero/hero-bg-4.png";
import heroPic5 from "../images/hero/hero-bg-5.png";
import heroPic6 from "../images/hero/hero-bg-6.png";
import heroPic7 from "../images/hero/hero-bg-7.png";
import heroPic8 from "../images/hero/hero-bg-8.png";
import heroPic9 from "../images/hero/hero-bg-9.png"

import { useTranslation } from "react-i18next";

const images = [heroPic1, heroPic2, heroPic3, heroPic4, heroPic5, heroPic6, heroPic7, heroPic8, heroPic9]

const description = [
    "Experience the ultimate cyberpunk adventure. Dive into neon-lit streets and high-stakes excitement.",
    "Step into a world where luck shines brighter than neon. Embrace the thrill and win big at our casino!",
    "Unlock the treasures of tomorrow. Play and experience next-level gaming.",
    "Feel the pulse of big wins. High-voltage games and massive jackpots await you.",
    "High-tech meets high stakes. Dive into a world of futuristic wins and endless possibilities.",
    "Where the future meets fortune. Enjoy electrifying games and endless winning opportunities.",
    "Discover a casino like no other. Neon lights, big wins, and endless excitement await you.",
    "The future of gaming is here. Join for a chance to win big in a neon-lit world.",
    "Power up your gaming experience. Electrifying games and huge rewards are waiting for you.",
    "Feel the beat of big wins. Let your luck shine through. Claim your fortune today!",
    "A casino that redefines winning. Enjoy thrilling games and electrifying jackpots.",
    "Step into the electric atmosphere. Unleash your luck and enjoy big wins.",
    "Where every spin is charged with excitement. Ignite your fortune and play now.",
    "Pulse-pounding action awaits. Spin the reels and let the neon guide you to victory."
]

function getRandomBackground() {
    const totalImages = 8;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    return images[randomIndex];
}

function getRandomDescription() {
    const total = description.length - 1;
    const randomIndex = Math.floor(Math.random() * total) + 1;
    return description[randomIndex];
}

export default function Banner(brand) {
    const { t } = useTranslation();

    const backgroundImage = getRandomBackground();
    const desc = getRandomDescription()

    return (
        <div className="banner w-full">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-20 shadow-xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                {brand.image === "-1" ? (
                    <img
                        alt=""
                        src={backgroundImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : (
                    <img
                        alt=""
                        src={images[brand.image]}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )
                }

                <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
                <div className="relative mx-auto max-w-2xl lg:mx-0">
                    <figure>
                        <blockquote className="mt-6 text-lg font-bold text-white sm:text-xl sm:leading-8">
                            <h1 className="neon-blue">
                                {t(brand.brand)}
                            </h1>
                            <h5>{t(desc)}</h5>
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
