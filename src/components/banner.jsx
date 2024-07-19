function getRandomBackground() {
    const totalImages = 10; // Замените на общее количество изображений
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    return `../src/images/hero/hero-bg-${randomIndex}.png`;
  }

export default function Banner(brand) {
    const backgroundImage = getRandomBackground();

    return (
            <div className="w-full ">
                <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                    <img
                        alt=""
                        src= {backgroundImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
                    <div className="relative mx-auto max-w-2xl lg:mx-0">
                        <figure>
                            <blockquote className="mt-6 text-lg font-bold text-white sm:text-xl sm:leading-8">
                                <h1 className="neon-blue">
                                    {brand.brand} 
                                </h1>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt ea, iusto nobis inventore facilis illo ad perspiciatis fuga architecto.</h5>
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
