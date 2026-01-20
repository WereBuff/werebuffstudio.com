import Section from '../components/Section';
import FooterSection from '../components/FooterSection';
import Carousel from '../components/Carousel';
import CharacterSwitcher from '../components/CharacterSwitcher';

const Games = () => {
    return (
        <div className="snap-container">
            {/* Hero Section */}
            <Section className="relative flex items-end justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src="/assets/game/show4.png"
                        alt="Kumarn Game Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl text-center px-6 pb-20">
                    {/* Game Logo */}
                    <img
                        src="/assets/images/Kumarn Wandering Spirit LOGO.png"
                        alt="Kumarn: The Wandering Spirit"
                        className="w-full max-w-2xl mx-auto mb-8"
                    />

                    {/* Game Description */}
                    <p className="body-text mb-8 text-shadow">
                        A dark and atmospheric horror adventure that plunges you into the heart of Thai
                        folklore. Unravel the mysteries of a lost spirit wandering between worlds.
                    </p>

                    {/* Steam Wishlist Button */}
                    <a
                        href="https://store.steampowered.com/app/3888420/Kumarn_The_Wandering_Spirit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                    >
                        Add to Wishlist on Steam
                    </a>
                </div>
            </Section>

            {/* Section 2: Game Gallery - Full Width Carousel */}
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-7xl w-full h-[600px]">
                    <Carousel />
                </div>
            </Section>

            {/* Section 3: Character Switcher */}
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <CharacterSwitcher />
            </Section>

            {/* Section 4: Trailer */}
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-7xl w-full">
                    <h2 className="heading-red mb-12 text-center">OFFICIAL TRAILER</h2>

                    {/* YouTube Embed */}
                    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.youtube.com/embed/b27SOnl8GkE"
                            title="Kumarn: The Wandering Spirit - Official Trailer"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Section>

            {/* Footer Section */}
            <FooterSection />
        </div>
    );
};

export default Games;
